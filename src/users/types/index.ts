import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: 'Ivan'})
    username: string;

    @ApiProperty({ example: 'Ivan123'})
    password: string;
}

export class LoginUserResponse {
    @ApiProperty({ example: {user: {
        userId: 1,
        username: 'Ivan',
        password: 'Ivan123'
    }}})
    user: {
        userId: number;
        username: string;
        password: string;
    }

    @ApiProperty({ example: 'Logged in'})
    msg: string;
}

export class LogoutUserResponse {
    @ApiProperty({ example: 'session has ended' })
    msg: string;
}

export class LoginCheckResponse {
    @ApiProperty({example: 1})
    userId: number;

    @ApiProperty({ example: 'Ivan'})
    username: string;

    @ApiProperty({ example: 'ivan@gmail.com'})
    email: string;
}

export class SignupResponse {
    @ApiProperty({example: 1})
    id: number;

    @ApiProperty({ example: 'Ivan12232'})
    username: string;

    @ApiProperty({})
    last_name: string;

    @ApiProperty({})
    first_name: string;

    @ApiProperty({})
    middle_name: string;

    @ApiProperty({})
    date_of_birth: Date;
    
    @ApiProperty({ example: 'ivan123@gmail.com'})
    email: string;

    @ApiProperty({})
    phone_number: string;

    @ApiProperty({ 
        example: '$2b$10$m9V0GtCRM05X2tk9rSTvHeWseSw9TOqU9V.9yNroEmbJwtrpEwb9u'
    })
    password: string;

    @ApiProperty({ example: '2024-04-13T16:18:52.462Z'})
    updatedAt: string;

    @ApiProperty({ example: '2024-04-13T16:18:52.462Z'})
    createdAt: string;
}