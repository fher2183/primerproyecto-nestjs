import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRolController } from './user-rol.controller';
import { UserRolService } from './user-rol.service';

@Module({
  imports: [PrismaModule],
  controllers: [RolController, UserController, UserRolController],
  providers: [RolService, UserService, UserRolService],
})
export class AuthenticationModule {}
