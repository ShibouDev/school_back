import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class UserEntity extends BaseEntity {
    //Id
    @ApiProperty({ description: 'Primary key as User ID', example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    //Email
    @ApiProperty({
        description: 'User email address',
        example: 'jhon.doe@gmail.com',
    })
    @Column({
        unique: true,
    })
    email: string;

    //Password
    @ApiProperty({ description: 'Hashed user password' })
    @Column()
    password: string;

    //FullName
    @ApiProperty({ description: 'Fullname user' })
    @Column()
    fullName: string;

    @ApiProperty({ description: 'When user was created' })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ description: 'When user was updated' })
    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password || this.password, salt)
    }
}