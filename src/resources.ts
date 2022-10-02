import { ImageSource } from "excalibur";
import sword from "./images/sword.png"; // for parcelv2 this is configured in the .parcelrc
import goblin from "./images/goblin.png"; // for parcelv2 this is configured in the .parcelrc

const Resources = {
  Sword: new ImageSource(sword),
  Goblin: new ImageSource(goblin)
};

export { Resources };