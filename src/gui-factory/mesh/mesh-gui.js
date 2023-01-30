import { changeMaterialGUI } from "../gui-property/change-material-gui";
import { isVisibleGUI } from "../gui-property/is-visible-gui";
import { metalnessAndRoughnessGUI } from "../gui-property/metalness-roughness-gui";

export const meshGuiFactory = (folder, mesh) => {
  isVisibleGUI(folder, mesh);
  changeMaterialGUI(folder, mesh);
};

export const meshCommonMaterialGuiFactory = (folder, material) => {
  metalnessAndRoughnessGUI(folder, material);
};
