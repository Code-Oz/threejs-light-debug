import { intensityAndColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { DIRECTIONNAL_LIGHT_COLOR_DEFAULT } from "../../config";
import { positionGui } from "../gui-property/position-gui";

export const directionalLightGuiFactory = (folder, light) => {
  const parameters = {
    color: DIRECTIONNAL_LIGHT_COLOR_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndColorGUI(folder, light, parameters);
  positionGui(folder, light.position);
  positionGui(folder, light.target.position, "target");
};

export const directionalLightHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};
