import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nombre: string, apellido: string): string {
    return 'Hello ' + nombre + ' ' + apellido;
  }
}
