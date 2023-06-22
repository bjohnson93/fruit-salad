import { AboutController } from "./controllers/AboutController.js";
import { FruitsController } from "./controllers/FruitsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [PlayersController, FruitsController],
    view: `
    <div class="container-fluid">
      <section  class="row">
        <div class="col-4">
          <section id='player-list' class="row">
            
        
          </section>
        </div>
        <div id="active-player" class="col-8 bg-secondary">
        
        </div>
       </section>
       <div class="row" id="current-fruit"></div> 
    </div>
    `
  },


]