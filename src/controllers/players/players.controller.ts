import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayersDto } from 'src/dtos/createPlayer.dto';
@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createPlayers(
    @Body() createPlayersDto: CreatePlayersDto,
  ): Promise<string> {
    const { phone, email, name } = createPlayersDto;
    return JSON.stringify({ phone, email, name });
  }
}
