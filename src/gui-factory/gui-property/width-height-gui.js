import { commonGuiFactory } from "../common-gui-factory";

const propertyWidth = "width";
const widthMin = 0.1;
const widthMax = 10;
const widthStep = 0.1;

const widthGUI = (folder, object, label = propertyWidth) => {
  return commonGuiFactory(propertyWidth)(folder, object, label)
    .min(widthMin)
    .max(widthMax)
    .step(widthStep);
};

const propertyHeight = "height";
const heightMin = 0;
const heightMax = 1;
const heightStep = 0.01;

const heightGUI = (folder, object, label = propertyHeight) => {
  return commonGuiFactory(propertyHeight)(folder, object, label)
    .min(heightMin)
    .max(heightMax)
    .step(heightStep);
};

export const widthAndHeightGUI = (folder, object, label) => {
  widthGUI(folder, object, label);
  heightGUI(folder, object, label);
};
