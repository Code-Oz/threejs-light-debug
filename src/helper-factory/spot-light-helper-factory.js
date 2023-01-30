import * as THREE from "three";
import { SPOT_HELPER_IS_VISIBLE_DEFAULT } from "../config";

export const spotLightHelperFactory = (spotLight) => {
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  spotLightHelper.visible = SPOT_HELPER_IS_VISIBLE_DEFAULT;

  return spotLightHelper;
};
