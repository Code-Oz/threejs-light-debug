import { commonGuiFactory } from "../common-gui-factory";

const propertyMetalness = "metalness";
const metalnessMin = 0;
const metalnessMax = 1;
const metalnessStep = 0.01;

const metalnessGUI = (folder, object, label = propertyMetalness) => {
  return commonGuiFactory(propertyMetalness)(folder, object, label)
    .min(metalnessMin)
    .max(metalnessMax)
    .step(metalnessStep);
};

const propertyRoughness = "roughness";
const roughnessMin = 0;
const roughnessMax = 1;
const roughnessStep = 0.01;

const roughnessGUI = (folder, object, label = propertyRoughness) => {
  return commonGuiFactory(propertyRoughness)(folder, object, label)
    .min(roughnessMin)
    .max(roughnessMax)
    .step(roughnessStep);
};

export const metalnessAndRoughnessGUI = (folder, object, label) => {
  metalnessGUI(folder, object, label);
  roughnessGUI(folder, object, label);
};
