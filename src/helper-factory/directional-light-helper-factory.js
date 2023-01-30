import * as THREE from "three";
import {
  DIRECTIONNAL_LIGHT_HELPER_IS_VISIBLE_DEFAULT,
  DIRECTIONNAL_LIGHT_HELPER_SIZE_DEFAULT,
} from "../config";

export const directionalLightHelperFactory = (directionalLight) => {
  const directionalLightHelper = new THREE.DirectionalLightHelper(
    directionalLight,
    DIRECTIONNAL_LIGHT_HELPER_SIZE_DEFAULT
  );
  directionalLightHelper.visible = DIRECTIONNAL_LIGHT_HELPER_IS_VISIBLE_DEFAULT;

  return directionalLightHelper;
};
