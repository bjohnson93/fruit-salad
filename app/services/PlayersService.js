import { AppState } from "../AppState.js"

class PlayersService {
  selectPlayer(playerId) {
    const selectedPlayer = AppState.players.find(p => p.id == playerId)
    AppState.activePlayer = selectedPlayer
    console.log(AppState.activePlayer, 'this is coming from the svc');
  }
  newPlayer() {
    console.log('this is the new player log', AppState.players);
  }
}
export const playersService = new PlayersService()