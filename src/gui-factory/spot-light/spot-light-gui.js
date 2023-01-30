import { intensityAndColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { SPOT_COLOR_DEFAULT } from "../../config";
import { positionGui } from "../gui-property/position-gui";
import { angleAndPenumbraGUI } from "../gui-property/angle-penumbra-gui";

export const spotLightGuiFactory = (folder, light) => {
  const parameters = {
    color: SPOT_COLOR_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndColorGUI(folder, light, parameters);
  positionGui(folder, light.position);
  positionGui(folder, light.target.position, "target");
  angleAndPenumbraGUI(folder, light);
};

export const spotAreaHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};
