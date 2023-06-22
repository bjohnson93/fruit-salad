import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { setHTML } from "../utils/Writer.js";

function _drawPlayers() {
  const players = AppState.players
  let template = ''
  // console.log('here are the players from the draw', players);
  players.forEach(p => template += p.playerTemplate)
  setHTML('player-list', template)
}

function _drawActivePlayer() {
  const activePlayer = AppState.activePlayer
  console.log(activePlayer, 'here it is');
  setHTML('active-player', activePlayer.activeTemplate)

}
export class PlayersController {
  constructor() {
    console.log('the players controller is working!');
    _drawPlayers()


  }

  selectPlayer(playerId) {
    console.log('this button was clicked!', playerId);
    playersService.selectPlayer(playerId)
    _drawActivePlayer()

  }
}


