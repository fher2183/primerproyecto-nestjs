import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AuthenticationModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
