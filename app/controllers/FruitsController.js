import { AppState } from "../AppState.js";
import { fruitService } from "../services/FruitsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


function _drawFruit() {
  console.log('hello from the draw fn', AppState.activeFruit);
  const currentFruit = AppState.activeFruit
  setHTML('current-fruit', `
  <section class="row justify-content-center">
  <div class="col-10 text-center p-4 bg-primary">
    <p class="fs-1 text-light">${currentFruit}</p>
    <form onsubmit="app.FruitsController.fruitSpell()">
    <input type="text" name="fruitInput">
    </form>
  </div>
</section>
  `)
}


// function _drawFruit() {
//   console.log('hello');
//   fruitService._drawFruit()


// }

function getRandomFruit() {
  fruitService.getRandomFruit()
}
export class FruitsController {
  constructor() {
    console.log('we are fruitin fantastic');
    getRandomFruit()
    // _drawFruit()

    AppState.on('activePlayer', getRandomFruit)
    AppState.on('activePlayer', _drawFruit)
    AppState.on('activeFruit', _drawFruit)
  }

  fruitSpell() {
    // fruitService.fruitSpell()
    event.preventDefault()
    const form = event.target
    // console.log('form works', getFormData(form))
    const currentData = getFormData(form)
    // const stringForm = JSON.stringify(currentData)
    // console.log(stringForm);
    console.log(currentData)
    if (currentData.fruitInput === AppState.activeFruit) {
      getRandomFruit()
    }
    else {
      console.log('wrong')
    }
  }

}
