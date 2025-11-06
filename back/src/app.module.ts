import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksModule } from './tasks/tasks.module';
import { BoardsModule } from './boards/boards.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'my-task-board.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule,
    BoardsModule,
    CommonModule,
  ],
})
export class AppModule {}
