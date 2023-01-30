import * as THREE from "three";
import {
  POINT_LIGHT_HELPER_IS_VISIBLE_DEFAULT,
  POINT_LIGHT_HELPER_SIZE_DEFAULT,
} from "../config";

export const pointLightHelperFactory = (pointligh) => {
  const pointlighHelper = new THREE.PointLightHelper(
    pointligh,
    POINT_LIGHT_HELPER_SIZE_DEFAULT
  );
  pointlighHelper.visible = POINT_LIGHT_HELPER_IS_VISIBLE_DEFAULT;

  return pointlighHelper;
};
