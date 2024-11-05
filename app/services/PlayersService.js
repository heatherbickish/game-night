import { AppState } from "../AppState.js"



class PlayersService {
  scorePoint(playerName) {
    const clickedPlayer = AppState.players.find(play => play.name == playerName)

  }
}

export const playersService = new PlayersService()