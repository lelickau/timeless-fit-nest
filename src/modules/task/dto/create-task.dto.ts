import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export enum TaskTags {
  WORK = 'work',
  HOME = 'home',
}
export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
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
  @IsString({ message: 'Тег должен быть строкой', each: true })
  tags: string[];

  @IsEnum(TaskTags, { message: 'Недопустимый тэг', each: true })
  enumTags: TaskTags[];

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 сим' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message: 'Пароль должен содержать одну заглавную букву и цифру',
  })
  password: string;

  @IsUrl(
    {
      protocols: ['https', 'wss'],
      // require_protocol: false,
      // require_port: true,
      // require_valid_protocol: false,
      // host_whitelist: ['google.com'],
      // host_blacklist: [''],
    },
    { message: 'Некорректный формат url' },
  )
  websiteurl: string;

  @IsUUID('4', { message: 'Некорректный формат UID' })
  userId: string;
}
