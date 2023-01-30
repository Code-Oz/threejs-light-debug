import { intensityAndColorGUI } from "../gui-property/color-intensity-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { AMBIENT_LIGHT_COLOR_DEFAULT } from "../../config";

export const ambientLightGuiFactory = (folder, light) => {
  const parameters = {
    color: AMBIENT_LIGHT_COLOR_DEFAULT,
  };

  isVisibleGUI(folder, light);
  intensityAndColorGUI(folder, light, parameters);
};
