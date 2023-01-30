import * as THREE from "three";
import {
  RECTAREA_COLOR_DEFAULT,
  RECTAREA_INTENSITY_DEFAULT,
  RECTAREA_WIDTH_DEFAULT,
  RECTAREA_HEIGHT_DEFAULT,
  RECTAREA_POSITION_X_DEFAULT,
  RECTAREA_POSITION_Y_DEFAULT,
  RECTAREA_POSITION_Z_DEFAULT,
  RECTAREA_IS_VISIBLE_DEFAULT,
} from "../config";

export const rectAreaLightFactory = () => {
  const rectLight = new THREE.RectAreaLight(
    RECTAREA_COLOR_DEFAULT,
    RECTAREA_INTENSITY_DEFAULT,
    RECTAREA_WIDTH_DEFAULT,
    RECTAREA_HEIGHT_DEFAULT
  );

  rectLight.position.set(
    RECTAREA_POSITION_X_DEFAULT,
    RECTAREA_POSITION_Y_DEFAULT,
    RECTAREA_POSITION_Z_DEFAULT
  );
  rectLight.visible = RECTAREA_IS_VISIBLE_DEFAULT;

  return rectLight;
};
