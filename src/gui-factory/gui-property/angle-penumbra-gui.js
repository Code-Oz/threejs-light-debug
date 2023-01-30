import { commonGuiFactory } from "../common-gui-factory";

const propertyAngle = "angle";
const angleMin = 0;
const angleMax = Math.PI / 2;
const angleStep = 0.1;

const angleGUI = (folder, object, label = propertyAngle) => {
  return commonGuiFactory(propertyAngle)(folder, object, label)
    .min(angleMin)
    .max(angleMax)
    .step(angleStep);
};

const propertyHeight = "penumbra";
const penumbraMin = 0;
const penumbraMax = 1;
const penumbraStep = 0.01;

const penumbraGUI = (folder, object, label = propertyHeight) => {
  return commonGuiFactory(propertyHeight)(folder, object, label)
    .min(penumbraMin)
    .max(penumbraMax)
    .step(penumbraStep);
};

export const angleAndPenumbraGUI = (folder, object, label) => {
  angleGUI(folder, object, label);
  penumbraGUI(folder, object, label);
};
