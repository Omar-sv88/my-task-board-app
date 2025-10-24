import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { Board } from './entities/board.entity';

import { HandleExceptions } from '../common/utils/handle-exceptions.util';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    try {
      const board = this.boardRepository.create(createBoardDto);

      return await this.boardRepository.save(board);
    } catch (error) {
      HandleExceptions.check(error);
    }
  }

  async findOne(id: string) {
    const board = await this.boardRepository.findOneBy({
      id,
    });

    if (!board) throw new NotFoundException(`Board with ID ${id} not found`);

    return board;
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const board = await this.findOne(id);

    try {
      await this.boardRepository.update(id, updateBoardDto);

      return {
        ...board,
        ...updateBoardDto,
        id,
      };
    } catch (error) {
      HandleExceptions.check(error);
    }
  }

  async remove(id: string) {
    const board = await this.findOne(id);

    await this.boardRepository.remove(board);
  }
}
