import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
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
