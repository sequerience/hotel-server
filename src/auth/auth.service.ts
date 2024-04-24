import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne({where: { username }});
        
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (user && passwordValid){
            return {
            userId: user.id,
            username: user.username,
            last_name: user.last_name,
            first_name: user.first_name,
            middle_name: user.middle_name,
            date_of_birth: user.date_of_birth,
            email: user.email,
            phone_number: user.phone_number
            };
        }
    }
}
