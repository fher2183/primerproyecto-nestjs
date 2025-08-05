import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Partial<CreateUserDto>) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }

  @Get('byemail/:email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
