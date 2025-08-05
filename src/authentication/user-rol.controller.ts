import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';

@Controller('user-rol')
export class UserRolController {
  constructor(private readonly userRolService: UserRolService) {}

  @Post()
  create(@Body() createUserRolDto: CreateUserRolDto) {
    return this.userRolService.create(createUserRolDto);
  }

  @Get()
  findAll() {
    return this.userRolService.findAll();
  }

  @Get(':user_id/:rol_id')
  findOne(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.findOne(Number(user_id), Number(rol_id));
  }

  @Delete(':user_id/:rol_id')
  remove(@Param('user_id') user_id: string, @Param('rol_id') rol_id: string) {
    return this.userRolService.remove(Number(user_id), Number(rol_id));
  }
}
