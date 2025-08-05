import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';

@Controller('user-rol')
export class UserRolController {
  constructor(private readonly userRolService: UserRolService) {}

  // Asigna un rol a un usuario
  @Post()
  create(@Body() createUserRolDto: CreateUserRolDto) {
    return this.userRolService.create(createUserRolDto);
  }

  // Obtiene todas las asignaciones de roles a usuarios
  @Get()
  findAll() {
    return this.userRolService.findAll();
  }

  // Busca una asignación específica de rol a usuario por IDs
  @Get(':user_id/:rol_id')
  findOne(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.findOne(Number(user_id), Number(rol_id));
  }

  // Elimina una asignación de rol a usuario
  @Delete(':user_id/:rol_id')
  remove(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.remove(Number(user_id), Number(rol_id));
  }
}
