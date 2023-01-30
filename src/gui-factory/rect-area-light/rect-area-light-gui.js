import { intensityAndColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { RECTAREA_COLOR_DEFAULT } from "../../config";
import { positionGui } from "../gui-property/position-gui";
import { widthAndHeightGUI } from "../gui-property/width-height-gui";

export const reactAreaLightGuiFactory = (folder, light) => {
  const parameters = {
    color: RECTAREA_COLOR_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndColorGUI(folder, light, parameters);
  positionGui(folder, light.position);
  widthAndHeightGUI(folder, light);
};

export const reactAreaHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};
