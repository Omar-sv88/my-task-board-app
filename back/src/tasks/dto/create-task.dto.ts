import { IsIn, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsUUID()
  boardId: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  icon: string;

  @IsString()
  @MinLength(4)
  name: string;

  @IsString()
  @IsIn(['in_progress', 'completed', 'wont_do'])
  status: string;
}
