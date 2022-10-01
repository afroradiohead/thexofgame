import { Actor, vec, Input, Engine, Vector } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Sword.toSprite());
    this.on('pointerup', () => {
      alert('yo');
    });
  }

  public update(engine: Engine) {
    this.movementAction(engine);
  }

  private movementAction(engine: Engine){
    const heldKeysVectors: {[key: string]: Vector} =  {
      [Input.Keys.A]: vec(-1, 0), 
      [Input.Keys.D]: vec(1, 0), 
      [Input.Keys.W]: vec(0, -1), 
      [Input.Keys.S]: vec(0, 1)
    }
    const speed = vec(5, 5);

    for(const key in heldKeysVectors){
      if(engine.input.keyboard.isHeld(<Input.Keys>key)){
        this.pos = this.pos.add(heldKeysVectors[key].scale(speed))
      }
    }
  }
}
