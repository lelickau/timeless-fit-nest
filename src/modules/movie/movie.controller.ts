import { Controller, Get, Query } from '@nestjs/common';

@Controller({
  path: 'movies',
})
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return `Фильмы с параметрами ${JSON.stringify(query)}`;
  }
}
