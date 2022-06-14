import { Module } from '@nestjs/common';
import { PlayersModule } from './modules/players/players.module';
import { PlayersController } from './controllers/players/players.controller';

@Module({
  imports: [PlayersModule],
  controllers: [PlayersController],
  providers: [],
})
export class AppModule {}
