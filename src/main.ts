import { Engine, Loader } from "excalibur";
import { Player } from "./player";
import { Enemy } from "./enemy";
import { Resources } from "./resources";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 600});
      
    }
    initialize() {
      
      const player = new Player();
      const enemy = new Enemy();
      this.add(player);
      this.add(enemy);

      const loader = new Loader([Resources.Sword, Resources.Goblin]);
      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();