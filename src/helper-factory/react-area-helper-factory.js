import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { RECTAREA_HELPER_IS_VISIBLE_DEFAULT } from "../config";

export const rectAreaLightHelperFactory = (reactAreaLight) => {
  const rectArealighHelper = new RectAreaLightHelper(reactAreaLight);
  rectArealighHelper.visible = RECTAREA_HELPER_IS_VISIBLE_DEFAULT;

  return rectArealighHelper;
};
