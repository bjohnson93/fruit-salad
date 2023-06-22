import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

class FruitsService {
  fruitSpell() {

    // const stringForm = JSON.stringify(currentData)
    // console.log(stringForm);

  }

  getRandomFruit() {
    const fruit = AppState.fruits
    console.log('we got fruit', fruit);

    const randomFruit = fruit[Math.floor(Math.random() * fruit.length)]
    console.log(randomFruit, 'random fruit')
    AppState.activeFruit = randomFruit
    console.log(AppState.activeFruit)
  }

}


export const fruitService = new FruitsService()