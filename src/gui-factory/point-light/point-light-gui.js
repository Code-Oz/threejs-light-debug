import { intensityAndColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { DIRECTIONNAL_LIGHT_COLOR_DEFAULT } from "../../config";
import { positionGui } from "../gui-property/position-gui";
import { distanceAndDecayGUI } from "../gui-property/distance-decay-gui";

export const pointLightGuiFactory = (folder, light) => {
  const parameters = {
    color: DIRECTIONNAL_LIGHT_COLOR_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndColorGUI(folder, light, parameters);
  positionGui(folder, light.position);
  distanceAndDecayGUI(folder, light);
};

export const pointLightHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};
