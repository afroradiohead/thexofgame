import { Actor, vec } from "excalibur";
import { Resources } from "./resources";

export class Enemy extends Actor {
  constructor() {
    super({
      pos: vec(500, 150),
      width: 10,
      height: 10
    });
  }

  onInitialize() {
    const goblinImage = Resources.Goblin.toSprite();
    goblinImage.height = 100;
    goblinImage.width = 100;
    this.graphics.add(goblinImage);
    
    // this.on('pointerup', () => {
    //   alert('yo');
    // });
  }

  public update() {
    // this.movementAction(engine);
  }


}
