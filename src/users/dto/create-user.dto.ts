import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Ivan'})
    @IsNotEmpty()
    readonly username: string;
    
    @ApiProperty({ example: 'Иванов'})
    @IsNotEmpty()
    readonly last_name: string;

    @ApiProperty({ example: 'Иван'})
    @IsNotEmpty()
    readonly first_name: string;

    @ApiProperty({ example: 'Иванович'})
    @IsNotEmpty()
    readonly middle_name: string;

    @ApiProperty({ example: '17.03.2024'})
    @IsNotEmpty()
    readonly date_of_birth: string;

    @ApiProperty({ example: 'ivan@gmail.com'})
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({ example: '89158656874'})
    @IsNotEmpty()
    readonly phone_number: string;
    
    @ApiProperty({ example: 'Ivan123'})
    @IsNotEmpty()
    readonly password: string;
}