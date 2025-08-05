import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Hello') // Nombre del grupo en Swagger
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Genera un saludo personalizado con el nombre y apellido proporcionados
  @Get()
  @ApiOperation({ summary: 'Mostrar saludo con nombre y apellido(test)' })
  getHello(@Query('nombre') nombre: string, @Query('apellido') apellido: string): string {
    const result = this.appService.getHello(nombre, apellido);
    console.log(result);
    return result;
  }
}
