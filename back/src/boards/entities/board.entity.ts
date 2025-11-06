import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Task } from 'src/tasks/entities/task.entity';

@Entity({
  name: 'boards',
})
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: true,
  })
  description: string;

  @Column('text')
  name: string;

  @OneToMany(() => Task, (task) => task.board, {
    cascade: true,
    eager: true,
  })
  tasks: Task[];
}
