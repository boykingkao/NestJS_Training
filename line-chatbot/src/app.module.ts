import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineController } from './line/line.controller';
import { LineService } from './line/line.service';
import { LineModule } from './line/line.module';
import configuration from './config/configuration';
import lineConfiguration from './config/lineConfiguration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, lineConfiguration], 
      // envFilePath: '.env',
      // isGlobal: true,
    }),
    LineModule,
  ],
  controllers: [AppController, LineController],
  providers: [AppService, LineService],
})
export class AppModule {}
