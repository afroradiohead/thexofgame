import { Actor, vec, Input, Engine, Vector, ParticleEmitter, EmitterType, Color } from "excalibur";
import { Resources } from "./resources";

const emitter = new ParticleEmitter({});
emitter.emitterType = EmitterType.Circle; // Shape of emitter nozzle
emitter.radius = 5;
emitter.minVel = 100;
emitter.maxVel = 200;
emitter.minAngle = Math.PI * 2;
emitter.maxAngle = Math.PI * 2;
// emitter.acceleration = vec(1, 1);
emitter.emitRate = 10; // 300 particles/second
emitter.opacity = 1;
emitter.fadeFlag = false; // fade particles overtime
emitter.particleLife = 2000; // in milliseconds = 1 sec
emitter.maxSize = 10; // in pixels
emitter.minSize = 10;
emitter.beginColor = Color.Black;
emitter.endColor = Color.Black;

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100
    });
  }

  onInitialize(engine: Engine) {
    this.graphics.add(Resources.Sword.toSprite());
    engine.add(emitter);
    this.addChild(emitter);

    
    
    // this.on('pointerup', () => {
    //   alert('yo');
    // });
  }

  public update(engine: Engine) {
    this.movementAction(engine);
    emitter.pos = this.pos;
  }

  private movementAction(engine: Engine){
    // engine.input.pointers.primary.lastScreenPos.dot()
    const emitV = engine.input.pointers.primary.lastScreenPos.sub(this.pos);
    const angle = Math.atan2(emitV.y, emitV.x);
    emitter.minAngle = angle;
    emitter.maxAngle = angle;

    const keyToDirectionV: {[key: string]: Vector} =  {
      [Input.Keys.A]: vec(-1, 0), 
      [Input.Keys.D]: vec(1, 0), 
      [Input.Keys.W]: vec(0, -1), 
      [Input.Keys.S]: vec(0, 1)
    }
    const speedV = vec(5, 5);



    for(const key in keyToDirectionV){
      if(engine.input.keyboard.isHeld(<Input.Keys>key)){
        this.pos = this.pos.add(keyToDirectionV[key].scale(speedV))
      }
    }
  }
}
