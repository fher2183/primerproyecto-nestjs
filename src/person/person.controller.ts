import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('PERSON') // Nombre del grupo en Swagger
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // Crear una nueva persona
  @Post()
  @ApiOperation({ summary: 'Crear una nueva persona' })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  // Obtener todas las personas
  @Get()
  @ApiOperation({ summary: 'Obtener lista de todas las personas' })
  findAll() {
    return this.personService.findAll();
  }

  // Obtener una persona por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una persona por su ID' })
  findOne(@Param('id') id: string) {
    return this.personService.findOne(Number(id));
  }

  // Buscar una persona por DPI
  @Get('dpi/:dpi')
  @ApiOperation({ summary: 'Buscar una persona por su DPI' })
  findByDpi(@Param('dpi') dpi: string) {
    return this.personService.findByDpi(dpi);
  }

  // Actualizar una persona
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar datos de una persona' })
  update(@Param('id') id: string, @Body() updatePersonDto: Partial<CreatePersonDto>) {
    return this.personService.update(Number(id), updatePersonDto);
  }

  // Eliminar una persona
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una persona' })
  remove(@Param('id') id: string) {
    return this.personService.remove(Number(id));
  }
}
