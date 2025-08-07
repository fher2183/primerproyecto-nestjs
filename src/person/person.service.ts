import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  // Crear una nueva persona
  async create(createPersonDto: CreatePersonDto) {
    const data = {
      ...createPersonDto,
      fecha_nacimiento: createPersonDto.fecha_nacimiento 
        ? new Date(createPersonDto.fecha_nacimiento) 
        : null
    };
    return this.prisma.person.create({
      data,
    });
  }

  // Obtener todas las personas
  async findAll() {
    return this.prisma.person.findMany();
  }

  // Obtener una persona por ID
  async findOne(id: number) {
    return this.prisma.person.findUnique({
      where: { id },
    });
  }

  // Buscar una persona por DPI
  async findByDpi(dpi: string) {
    return this.prisma.person.findUnique({
      where: { dpi },
    });
  }

  // Actualizar una persona
  async update(id: number, updatePersonDto: Partial<CreatePersonDto>) {
    const data = {
      ...updatePersonDto,
      fecha_nacimiento: updatePersonDto.fecha_nacimiento 
        ? new Date(updatePersonDto.fecha_nacimiento)
        : undefined
    };
    return this.prisma.person.update({
      where: { id },
      data,
    });
  }

  // Eliminar una persona
  async remove(id: number) {
    return this.prisma.person.delete({
      where: { id },
    });
  }
}
