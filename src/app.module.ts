import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';
import { ConfigModule } from '@nestjs/config';
import DbConnection from './config/configuration';
import configuration from './config/configuration';

@Module({
  imports: [CardsModule, ConfigModule.forRoot({
    load: [configuration],
  })],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
