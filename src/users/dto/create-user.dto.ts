import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class CreateUserDto {
    @ApiProperty({
        default: 'test@test.ru',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        default: 'Мистер Кредо',
    })
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({
        default: '123',
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {message: MESSAGES.PASSWORD_RULE_MESSAGE})
    password: string;
}