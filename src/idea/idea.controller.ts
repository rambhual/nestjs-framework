import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDto } from './idea.dto';

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
  Add(@Body() data: IdeaDto) {
    return this.ideaService.Add(data);
  }

  @Put(':id')
  Update(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    return this.ideaService.Update(id, data);
  }

  @Delete(':id')
  Delete(@Param('id') id: string) {
    return this.ideaService.Delete(id);
  }
}
