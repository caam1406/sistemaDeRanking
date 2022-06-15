import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayersDto } from 'src/dtos/createPlayer.dto';
import { IPlayer } from 'src/interfaces/player.i';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger('PlayersService');
  private players: IPlayer[] = []; //temp storage for players

  async createPlayers(createPlayersDto: CreatePlayersDto): Promise<string> {
    this.logger.log(`Creating players: ${JSON.stringify(createPlayersDto)}`);
    this.createPlayer(createPlayersDto);
    // return JSON.stringify(createPlayersDto);
    return JSON.stringify(this.players);
  }
  private createPlayer(createPlayersDto: CreatePlayersDto): IPlayer {
    const { phone, email, name } = createPlayersDto;
    const player: IPlayer = {
      _id: uuidv4(),
      phone,
      email,
      name,
      ramking: 'A',
      position: 1,
      profilePhoto: '',
    };
    this.players.push(player);
    return player;
  }
}
