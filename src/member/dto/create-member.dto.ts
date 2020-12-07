import { IsInt, IsString } from 'class-validator';

export class CreateMemberDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: number;
}
