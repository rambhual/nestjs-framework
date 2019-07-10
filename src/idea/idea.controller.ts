import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UsePipes,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDto } from './idea.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  GetAll() {
    return this.ideaService.GetAll();
  }

  @Get(':id')
  GetById(@Param('id') id: string) {
    return this.ideaService.GetById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  Add(@Body() data: IdeaDto) {
    return this.ideaService.Add(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  Update(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    return this.ideaService.Update(id, data);
  }

  @Delete(':id')
  Delete(@Param('id') id: string) {
    return this.ideaService.Delete(id);
  }
}
