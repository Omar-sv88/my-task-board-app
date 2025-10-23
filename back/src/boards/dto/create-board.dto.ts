import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @MinLength(4)
  name: string;
}
