import * as THREE from "three";
import {
  DIRECTIONNAL_LIGHT_COLOR_DEFAULT,
  DIRECTIONNAL_LIGHT_INTENSITY_DEFAULT,
  DIRECTIONNAL_LIGHT_POSITION_X_DEFAULT,
  DIRECTIONNAL_LIGHT_POSITION_Y_DEFAULT,
  DIRECTIONNAL_LIGHT_POSITION_Z_DEFAULT,
  DIRECTIONNAL_LIGHT_IS_VISIBLE_DEFAULT,
} from "../config";

export const directionalLightFactory = () => {
  const directionalLight = new THREE.DirectionalLight(
    DIRECTIONNAL_LIGHT_COLOR_DEFAULT,
    DIRECTIONNAL_LIGHT_INTENSITY_DEFAULT
  );
  directionalLight.position.set(
    DIRECTIONNAL_LIGHT_POSITION_X_DEFAULT,
    DIRECTIONNAL_LIGHT_POSITION_Y_DEFAULT,
    DIRECTIONNAL_LIGHT_POSITION_Z_DEFAULT
  );
  directionalLight.visible = DIRECTIONNAL_LIGHT_IS_VISIBLE_DEFAULT;

  // https://threejs.org/docs/?q=directionalLight#api/en/lights/DirectionalLight
  // Need to add .target in order to update position of the targeting point of the light
  return [directionalLight, directionalLight.target];
};
