import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('USER-ROL') // Nombre del grupo en Swagger
@Controller('user-rol')
export class UserRolController {
  constructor(private readonly userRolService: UserRolService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Asignar rol a usuario', 
    description: 'Asigna un rol específico a un usuario determinado' 
  })
  create(@Body() createUserRolDto: CreateUserRolDto) {
    return this.userRolService.create(createUserRolDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar asignaciones', 
    description: 'Obtiene todas las asignaciones de roles a usuarios en el sistema' 
  })
  findAll() {
    return this.userRolService.findAll();
  }

  @Get(':user_id/:rol_id')
  @ApiOperation({ 
    summary: 'Buscar asignación específica', 
    description: 'Busca una asignación específica de rol a usuario usando ambos IDs' 
  })
  findOne(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.findOne(Number(user_id), Number(rol_id));
  }

  @Delete(':user_id/:rol_id')
  @ApiOperation({ 
    summary: 'Eliminar asignación', 
    description: 'Elimina la asignación de un rol específico a un usuario' 
  })
  remove(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.remove(Number(user_id), Number(rol_id));
  }
}
