import { commonGuiFactory } from "../common-gui-factory";

const propertyDistance = "distance";
const distanceMin = 0;
const distanceMax = 30;
const distanceStep = 0.01;

const distanceGUI = (folder, object, label = propertyDistance) => {
  return commonGuiFactory(propertyDistance)(folder, object, label)
    .min(distanceMin)
    .max(distanceMax)
    .step(distanceStep);
};

const propertyDecay = "decay";
const decayMin = 0;
const decayMax = 20;
const decayStep = 0.1;

const decayGUI = (folder, object, label = propertyDecay) => {
  return commonGuiFactory(propertyDecay)(folder, object, label)
    .min(decayMin)
    .max(decayMax)
    .step(decayStep);
};

export const distanceAndDecayGUI = (folder, object, label) => {
  distanceGUI(folder, object, label);
  decayGUI(folder, object, label);
};
