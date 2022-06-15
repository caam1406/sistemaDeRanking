import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayersDto } from 'src/dtos/createPlayer.dto';
import { PlayersService } from 'src/services/players/players.service';
@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}
  @Post()
  async createPlayers(
    @Body() createPlayersDto: CreatePlayersDto,
  ): Promise<string> {
    return this.playersService.createPlayers(createPlayersDto);
  }
}
