import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { addToSceneWrapper } from "./add-to-scene";
import { defaultMaterial, sizes } from "./config";
import { directionalLightFactory } from "./light-factory/directional-light-factory";
import { axesBuilderFactory } from "./helper-factory/axes-builder-factory";
import { directionalLightHelperFactory } from "./helper-factory/directional-light-helper-factory";
import { createDebugGUI } from "./gui-factory/create-gui";
import {
  directionalLightGuiFactory,
  directionalLightHelperGuiFactory,
} from "./gui-factory/directionnal-light/directionnal-light-gui";
import { createAllMesh } from "./create-all-mesh";
import {
  meshGuiFactory,
  meshCommonMaterialGuiFactory,
} from "./gui-factory/mesh/mesh-gui";
/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const addObjectToScene = addToSceneWrapper(scene);
addObjectToScene(axesBuilderFactory());

// Mesh
const [cube, cubeFar, floor, torus, sphere] = addObjectToScene(createAllMesh());

// Debug
const {
  folderDirectionnalLight,
  folderMeshCube,
  folderMeshCubeFar,
  folderMeshFloor,
  folderMeshTorus,
  folderMeshSphere,
  folderMeshCommon,
} = createDebugGUI();

// Global Mesh like metalness/roughness
meshCommonMaterialGuiFactory(folderMeshCommon, defaultMaterial);
meshGuiFactory(folderMeshCube, cube);
meshGuiFactory(folderMeshCubeFar, cubeFar);
meshGuiFactory(folderMeshFloor, floor);
meshGuiFactory(folderMeshTorus, torus);
meshGuiFactory(folderMeshSphere, sphere);

// DirectionalLight
// Emit in only one direction to the 'target point' (default is (0,0,0))
const [directionalLight] = addObjectToScene(directionalLightFactory());
directionalLightGuiFactory(folderDirectionnalLight, directionalLight);

const directionalLightHelper = addObjectToScene(
  directionalLightHelperFactory(directionalLight)
);
directionalLightHelperGuiFactory(
  folderDirectionnalLight,
  directionalLightHelper
);

/**
 * Sizes
 */
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Update Helper
  directionalLightHelper.update();

  // Update mesh rotation
  cube.rotation.x = 0.15 * elapsedTime;
  cube.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.15 * elapsedTime;
  sphere.rotation.y = 0.1 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
