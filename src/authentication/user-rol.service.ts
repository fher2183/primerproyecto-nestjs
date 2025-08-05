import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';

@Injectable()
export class UserRolService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserRolDto) {
    return this.prisma.user_rol.create({ data });
  }

  async findAll() {
    return this.prisma.user_rol.findMany({ include: { user: true, rol: true } });
  }

  async findOne(user_id: number, rol_id: number) {
    return this.prisma.user_rol.findUnique({ where: { user_id_rol_id: { user_id, rol_id } }, include: { user: true, rol: true } });
  }

  async remove(user_id: number, rol_id: number) {
    return this.prisma.user_rol.delete({ where: { user_id_rol_id: { user_id, rol_id } } });
  }
}
