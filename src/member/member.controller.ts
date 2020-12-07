import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './entities/member.entity';

@ApiBearerAuth()
@ApiTags('Members')
@Controller('Member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @ApiOperation({ summary: 'Create member' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createMemberDto: CreateMemberDto): Promise<CreateMemberDto> {
    return this.memberService.create(createMemberDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Member,
  })
  findOne(@Param('id') id: string): Member {
    return this.memberService.findOne(+id);
  }
}
