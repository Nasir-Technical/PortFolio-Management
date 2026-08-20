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
import { PortfoliosService } from './portfolios.service';

@Controller('portfolios')
@UseInterceptors(TransformInterceptor)
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Get()
  findAll() {
    return this.portfoliosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfoliosService.findOne(id);
  }

  @Post()
  create(@Body() createPortfolioDto: any) {
    return this.portfoliosService.create(createPortfolioDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortfolioDto: any) {
    return this.portfoliosService.update(id, updatePortfolioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portfoliosService.remove(id);
  }
}
