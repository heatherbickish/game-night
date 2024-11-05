import { AppState } from "../AppState.js"



class PlayersService {
  scorePoint(playerName) {
    const clickedPlayer = AppState.players.find(play => play.name == playerName)
    clickedPlayer.score++
  }

  scoreWithdraw(playerName) {
    const clickedPlayer = AppState.players.find(play => play.name == playerName)
    clickedPlayer.score--
    if (clickedPlayer.score < 0) {
      clickedPlayer.score = 0
    }
  }
}

export const playersService = new PlayersService()