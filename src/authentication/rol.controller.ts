import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  // Crea un nuevo rol en el sistema
  @Post()
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  // Obtiene la lista de todos los roles
  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  // Busca un rol por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(Number(id));
  }

  // Actualiza los datos de un rol existente
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolDto: Partial<CreateRolDto>) {
    return this.rolService.update(Number(id), updateRolDto);
  }

  // Elimina un rol del sistema
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(Number(id));
  }
}
