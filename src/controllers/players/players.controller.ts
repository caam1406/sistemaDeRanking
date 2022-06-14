import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createPlayers(): Promise<string> {
    return 'This action create one players';
  }
}
