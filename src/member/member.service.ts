import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  private readonly members: Member[] = [];

  create(member: CreateMemberDto): CreateMemberDto {
    this.members.push(member);
    return member;
  }


  findOne(id: number): Member {
    return this.members[id];
  }
}
