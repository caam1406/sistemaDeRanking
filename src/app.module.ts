import { Module } from '@nestjs/common';
import { PlayersModule } from './modules/players/players.module';
import { PlayersController } from './controllers/players/players.controller';
import { PlayersService } from './services/players/players.service';

@Module({
  imports: [PlayersModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class AppModule {}
