import * as THREE from "three";
import { AXES_HELPER_SIZE_DEFAULT } from "../config";

export const axesBuilderFactory = () => {
  return new THREE.AxesHelper(AXES_HELPER_SIZE_DEFAULT);
};
