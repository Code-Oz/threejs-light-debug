import { commonGuiFactory } from "../common-gui-factory";

const property = "visible";

export const isVisibleGUI = (folder, object, label = property) => {
  return commonGuiFactory(property)(folder, object, label);
};
