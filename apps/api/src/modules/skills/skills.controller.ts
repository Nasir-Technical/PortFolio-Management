import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { SkillsService } from './skills.service';

@Controller('skills')
@UseInterceptors(TransformInterceptor)
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @Post()
  create(@Body() createSkillDto: any) {
    return this.skillsService.create(createSkillDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: any) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
