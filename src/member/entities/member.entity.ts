import { ApiProperty } from '@nestjs/swagger';

export class Member {
    /**
     * The name of the Member
     * @example Kitty
     */
    @ApiProperty({
      example: 'xiaoming',
      description: 'username'
    })
    username: string;
    password: number;
}
