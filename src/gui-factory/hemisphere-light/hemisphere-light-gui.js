import { intensityAndDoubleColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import {
  HEMISPHERE_LIGHT_SKY_COLOR_DEFAULT,
  HEMISPHERE_LIGHT_GROUND_DEFAULT,
} from "../../config";

export const hemisphereLightGuiFactory = (folder, light) => {
  const parameters = {
    color: HEMISPHERE_LIGHT_SKY_COLOR_DEFAULT,
    groundColor: HEMISPHERE_LIGHT_GROUND_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndDoubleColorGUI(folder, light, parameters);
};

export const hemisphereLightHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};
