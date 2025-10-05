import {
  Controller,
  Get,
  Headers,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller({
  path: 'movies',
})
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return `Фильмы с параметрами ${JSON.stringify(query)}`;
  }

  @Get(':id/string/:name')
  findById(@Param() params: { id: string; name: string }) {
    return `${params.id} ${params.name}`;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }

  @Get('request')
  getRequestDetails(@Req() request: Request) {
    return {
      method: request.method,
      url: request.url,
      headers: request.headers,
      query: request.query,
      params: request.params,
    };
  }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(201).json({ message: 'Ok' });
  }
}
