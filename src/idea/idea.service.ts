import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaDto } from './idea.dto';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
  ) {}

  async GetAll() {
    return await this.ideaRepository.find();
  }
  async GetById(id: string) {
    return await this.ideaRepository.findOne({ where: { id } });
  }

  async Add(data: IdeaDto) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async Update(id: string, data: Partial<IdeaDto>) {
    await this.ideaRepository.update({ id }, data);
    return await this.ideaRepository.findOne({ id });
  }

  async Delete(id: string) {
    await this.ideaRepository.delete({ id });
    return { deleted: true };
  }
}
