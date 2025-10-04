import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { TestTitle } from '../decorators/test-title.decorator';

export enum TaskTags {
  WORK = 'work',
  HOME = 'home',
}
export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
  @TestTitle('Task:', { message: 'Невалид' })
  @Length(2, 10, {
    message: 'Название задачи должно быть в диапазоне от 2х до 10 символов',
  })
  title: string;

  @IsBoolean({ message: 'Статус должен быть Boolean' })
  isCompleted: boolean;

  @IsString({ message: 'Описание задачи должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsOptional()
  priority: number;

  @IsOptional()
  @IsArray({ message: 'Допустим только массив' })
  @IsEnum(TaskTags, { message: 'Недопустимый тэг', each: true })
  tags: TaskTags[];
}
