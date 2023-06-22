import { generateId } from "../utils/generateId.js";

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0

  }

  get playerTemplate() {
    return `
 
      <div class="col-12 elevation-4">
        <h1>Name: ${this.name}</h1>
        <h2>Score: ${this.score}</h2>
        <h3>Color: ${this.color}</h3>
        <button onclick="app.PlayersController.selectPlayer('${this.id}')">Select Player</button>
      </div>

    `
  }

  get activeTemplate() {
    return `
    <div class="col-7 bg-primary text-light">
    <h1>Name: ${this.name}</h1>
    <h2>Score: ${this.score}</h2>
  </div>
    `

  }
}