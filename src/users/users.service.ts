import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor (
        @InjectModel(User)
        private usermodel: typeof User,
    ) {}

    findOne(filter: {
        where: { id?: string; username?: string, email?: string}
    }): Promise<User> {
        return this.usermodel.findOne({...filter});
    }

    async create(
        createUserDto: CreateUserDto,
    ): Promise<User | {warningMessage: string}> {
        const user = new User();
        const existingByUsername = await this.findOne({
            where: {username: createUserDto.username},
        });
        const existingByEmail = await this.findOne({
            where: {email: createUserDto.email},
        });
        if (existingByUsername) {
            return {warningMessage: 'Пользователь с таким именем уже существует'};
        }
        else if (existingByEmail) {
            return {warningMessage: 'Пользователь с таким email уже существует'};
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        user.username = createUserDto.username;
        user.last_name = createUserDto.last_name;
        user.first_name = createUserDto.first_name;
        user.middle_name = createUserDto.middle_name;
        user.date_of_birth = createUserDto.date_of_birth;
        user.email = createUserDto.email;
        user.phone_number = createUserDto.phone_number;
        user.password = hashedPassword;
        

        return user.save();
    }
}
