import * as THREE from "three";
import {
  HEMISPHERE_LIGHT_HELPER_IS_VISIBLE_DEFAULT,
  HEMISPHERE_LIGHT_HELPER_SIZE_DEFAULT,
} from "../config";

export const hemisphereLightHelperFactory = (hemisphereLight) => {
  const hemisphereLightHelper = new THREE.HemisphereLightHelper(
    hemisphereLight,
    HEMISPHERE_LIGHT_HELPER_SIZE_DEFAULT
  );
  hemisphereLightHelper.visible = HEMISPHERE_LIGHT_HELPER_IS_VISIBLE_DEFAULT;

  return hemisphereLightHelper;
};
