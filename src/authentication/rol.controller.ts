import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('ROL') // Nombre del grupo en Swagger
@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Crear nuevo rol', 
    description: 'Crea un nuevo rol en el sistema con nombre y descripción' 
  })
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar roles', 
    description: 'Obtiene una lista de todos los roles disponibles en el sistema' 
  })
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Buscar rol por ID', 
    description: 'Obtiene un rol específico mediante su ID' 
  })
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Actualizar rol', 
    description: 'Modifica la información de un rol existente' 
  })
  update(@Param('id') id: string, @Body() updateRolDto: Partial<CreateRolDto>) {
    return this.rolService.update(Number(id), updateRolDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Eliminar rol', 
    description: 'Elimina un rol del sistema permanentemente' 
  })
  remove(@Param('id') id: string) {
    return this.rolService.remove(Number(id));
  }
}
