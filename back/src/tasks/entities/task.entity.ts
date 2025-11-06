import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Board } from 'src/boards/entities/board.entity';

@Entity({
  name: 'tasks',
})
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Board, (board) => board.tasks, {
    onDelete: 'CASCADE',
  })
  board: Board;

  @Column('text', {
    nullable: true,
  })
  description: string;

  @Column('text')
  icon: string;

  @Column('text')
  name: string;

  @Column('text')
  status: string;

  @Column('text')
  variant: string;

  @BeforeInsert()
  onBeforeInsert() {
    if (!this.variant) {
      this.variant = 'to_do';
    }
  }
}
