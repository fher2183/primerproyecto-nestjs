import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('USERS') // Nombre del grupo en Swagger
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Crear un nuevo usuario', 
    description: 'Crea un nuevo usuario en el sistema con su información básica' 
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Obtener todos los usuarios', 
    description: 'Retorna una lista de todos los usuarios registrados en el sistema' 
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Obtener usuario por ID', 
    description: 'Busca y retorna un usuario específico basado en su ID' 
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Actualizar usuario', 
    description: 'Modifica la información de un usuario existente' 
  })
  update(@Param('id') id: string, @Body() updateUserDto: Partial<CreateUserDto>) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Eliminar usuario', 
    description: 'Elimina un usuario del sistema permanentemente' 
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }

  @Get('byemail/:email')
  @ApiOperation({ 
    summary: 'Buscar usuario por email', 
    description: 'Busca y retorna un usuario específico basado en su dirección de email' 
  })
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
