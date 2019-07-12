import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaDto } from './idea.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async GetAll() {
    return await this.ideaRepository.find();
  }
  async GetById(id: string) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    if (!idea) {
      throw new HttpException('Not fount', HttpStatus.NOT_FOUND);
    }
    return idea;
  }

  async Add(data: IdeaDto) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async Update(id: string, data: Partial<IdeaDto>) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    if (!idea) {
      throw new HttpException('Not fount', HttpStatus.NOT_FOUND);
    }
    await this.ideaRepository.update({ id }, data);
    return idea;
  }

  async Delete(id: string) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    if (!idea) {
      throw new HttpException('Not fount', HttpStatus.NOT_FOUND);
    }
    await this.ideaRepository.delete({ id });
    return idea;
  }
}
