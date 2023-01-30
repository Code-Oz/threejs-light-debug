import { materialPhysical } from "./mesh-factory/material-factory";

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const DEFAULT_VISIBLE = false;

// AXES HELPER
export const AXES_HELPER_SIZE_DEFAULT = 2;

// GEOMETRY
export const BOX_SIZE = 0.75;
export const BOX_POSITION_X_DEFAULT = 0;
export const BOX_POSITION_Y_DEFAULT = 0;
export const BOX_POSITION_Z_DEFAULT = 0;

export const SPHERE_RADIUS = 0.5;
export const SPHERE_POSITION_X_DEFAULT = -1.5;
export const SPHERE_POSITION_Y_DEFAULT = 0;
export const SPHERE_POSITION_Z_DEFAULT = 0;

export const TORUS_RADIUS = 0.3;
export const TORUS_POSITION_X_DEFAULT = 1.5;
export const TORUS_POSITION_Y_DEFAULT = 0;
export const TORUS_POSITION_Z_DEFAULT = 0;

export const FLOOR_WIDTH = 5;
export const FLOOR_HEIGHT = 5;
export const FLOOR_POSITION_X_DEFAULT = 0;
export const FLOOR_POSITION_Y_DEFAULT = -0.65;
export const FLOOR_POSITION_Z_DEFAULT = 0;

export const BOX_FAR_SIZE = 1;
export const BOX_FAR_POSITION_X_DEFAULT = 5;
export const BOX_FAR_POSITION_Y_DEFAULT = -5;
export const BOX_FAR_POSITION_Z_DEFAULT = 0;

// MATERIAL
export const defaultMaterial = materialPhysical;

// AMBIENT LIGHT
export const AMBIENT_LIGHT_COLOR_DEFAULT = 0xffffff;
export const AMBIENT_LIGHT_INTENSITY_DEFAULT = 0.5;
export const AMBIENT_LIGHT_POSITION_X_DEFAULT = 0;
export const AMBIENT_LIGHT_POSITION_Y_DEFAULT = 0;
export const AMBIENT_LIGHT_POSITION_Z_DEFAULT = 0;
export const AMBIENT_LIGHT_IS_VISIBLE_DEFAULT = DEFAULT_VISIBLE;

// DIRECTIONNAL LIGHT
export const DIRECTIONNAL_LIGHT_COLOR_DEFAULT = 0xff0000;
export const DIRECTIONNAL_LIGHT_INTENSITY_DEFAULT = 0.3;
export const DIRECTIONNAL_LIGHT_POSITION_X_DEFAULT = 1;
export const DIRECTIONNAL_LIGHT_POSITION_Y_DEFAULT = 0.25;
export const DIRECTIONNAL_LIGHT_POSITION_Z_DEFAULT = 0;
export const DIRECTIONNAL_LIGHT_IS_VISIBLE_DEFAULT = DEFAULT_VISIBLE;

// DIRECTIONNAL LIGHT HELPER
export const DIRECTIONNAL_LIGHT_HELPER_IS_VISIBLE_DEFAULT = DEFAULT_VISIBLE;
export const DIRECTIONNAL_LIGHT_HELPER_SIZE_DEFAULT = 1;
