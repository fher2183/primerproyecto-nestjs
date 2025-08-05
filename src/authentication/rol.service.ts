import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRolDto } from './dto/create-rol.dto';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRolDto) {
    return this.prisma.rol.create({ data });
  }

  async findAll() {
    return this.prisma.rol.findMany();
  }

  async findOne(id: number) {
    return this.prisma.rol.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateRolDto>) {
    return this.prisma.rol.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.rol.delete({ where: { id } });
  }
}
