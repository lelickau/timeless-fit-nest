import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
  @Length(2, 10, {
    message: 'Название задачи должно быть в диапазоне от 2х до 10 символов',
  })
  title: string;

  @IsBoolean({ message: 'Статус должен быть Boolean' })
  isCompleted: boolean;
}
