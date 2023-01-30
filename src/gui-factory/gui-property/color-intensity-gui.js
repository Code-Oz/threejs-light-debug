import { commonGuiFactory } from "../common-gui-factory";

const propertyColor = "color";

const colorGUI = (folder, object, objectParameter, label = propertyColor) => {
  folder
    .addColor(objectParameter, propertyColor)
    .name(label)
    .onChange(() => {
      object.color.set(objectParameter.color);
    });
};

const propertyIntensity = "intensity";
const intensityMin = 0;
const intensityMax = 1;
const intensityStep = 0.01;

export const intensityGUI = (folder, object, label = propertyIntensity) => {
  return commonGuiFactory(propertyIntensity)(folder, object, label)
    .min(intensityMin)
    .max(intensityMax)
    .step(intensityStep);
};

export const intensityAndColorGUI = (
  folder,
  object,
  objectParameter,
  label
) => {
  intensityGUI(folder, object, label);
  colorGUI(folder, object, objectParameter);
  return folder;
};
