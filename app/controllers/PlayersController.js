import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"


export class PlayersController {
  constructor() {
    console.log('Please work')
    this.drawPlayers()
    this.scorePoint
  }

  drawPlayers() {
    let playElem = document.getElementById('players')
    playElem.innerText = ''
    for (let i = 0; i < AppState.players.length; i++) {
      const player = AppState.players[i]
      playElem.innerHTML += `<p>${player.name}   <span><button class="btn btn-info">-</button></span>   <span>${player.score}</span>   <span><button onclick="app.PlayersController.scorePoint('${player.name}')" class="btn btn-info">+</button></p>`
    }
  }

  scorePoint(playerName) {
    console.log('clicked')
    playersService.scorePoint(playerName)
    this.drawPlayers()
  }
}

