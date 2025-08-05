import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolDto: Partial<CreateRolDto>) {
    return this.rolService.update(Number(id), updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(Number(id));
  }
}
