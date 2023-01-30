import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

/**
 * Base
 */
// Debug
import * as dat from "dat.gui";
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Lights
 */

// Ambient light
// For light bouncing everywhere
// Position is osef
const ambientLight = new THREE.AmbientLight();
ambientLight.color = new THREE.Color(0xffffff);
ambientLight.intensity = 0.5;
ambientLight.visible = false;

const folderAmbientLight = gui.addFolder("AmbientLight");

const parametersAmbientLight = {
  color: 0xffffff,
};

folderAmbientLight.add(ambientLight, "visible");

folderAmbientLight
  .addColor(parametersAmbientLight, "color")
  .onChange(() => {
    ambientLight.color.set(parametersAmbientLight.color);
  })
  .name("color");

folderAmbientLight
  .add(ambientLight, "intensity")
  .min(0)
  .max(1)
  .step(0.01)
  .name("light intensity");

// Directional light
// Emit in only one direction
const directionalLight = new THREE.DirectionalLight(0xff0000, 0.3);
directionalLight.position.set(1, 0.25, 0);
directionalLight.visible = false;
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  2
);
directionalLightHelper.visible = false;

const folderDirectionalLight = gui.addFolder("DirectionalLight");

const parametersDirectionalLight = {
  color: 0xff0000,
  targetX: 0,
  targetY: 0,
  targetZ: 0,
};

folderDirectionalLight
  .addColor(parametersDirectionalLight, "color")
  .onChange(() => {
    directionalLight.color.set(parametersDirectionalLight.color);
  })
  .name("color");

folderDirectionalLight.add(directionalLight, "visible");
folderDirectionalLight
  .add(directionalLightHelper, "visible")
  .name("Light Helper visibility");

folderDirectionalLight
  .add(directionalLight, "intensity")
  .min(0)
  .max(1)
  .step(0.01)
  .name("intensity");

folderDirectionalLight
  .add(directionalLight.position, "x")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position X");

folderDirectionalLight
  .add(directionalLight.position, "y")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position Y");

folderDirectionalLight
  .add(directionalLight.position, "z")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position Z");

// Hemisphere light
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);
hemisphereLight.visible = false;
const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.2
);
hemisphereLightHelper.visible = false;

const parametersHemisphereLight = {
  color: 0xff0000,
  groundColor: 0x0000ff,
};

const folderHemisphereLight = gui.addFolder("HemisphereLight");

folderHemisphereLight.add(hemisphereLight, "visible");

folderHemisphereLight
  .add(hemisphereLightHelper, "visible")
  .name("Hemisphere Helper visibility");

folderHemisphereLight
  .addColor(parametersHemisphereLight, "color")
  .onChange(() => {
    hemisphereLight.color.set(parametersHemisphereLight.color);
  })
  .name("color");

folderHemisphereLight
  .addColor(parametersHemisphereLight, "groundColor")
  .onChange(() => {
    hemisphereLight.groundColor.set(parametersHemisphereLight.groundColor);
  })
  .name("groundColor");

folderHemisphereLight
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(1)
  .step(0.01)
  .name("intensity");

// Point light
// Point in every direction
const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2);
pointLight.position.set(1, 0.5, 1);
pointLight.visible = false;
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
pointLightHelper.visible = false;

// Distance & decay

// Decay is the quantity of light attenuation with the distance
// + -> less light across far object
// 0 No decay so every object is lighted by the same intensity

// Distance = 0 -> no decay & all object in the scene is under the same light intensity
// Need to use Decay with Distance > 0, otherwise distance is useless. With Distance > 0 & Decay > 0, we can set the among of intensity of light across object depending on the distance and decay power

const parametersPointLight = {
  color: 0xff0000,
};

const folderPointLight = gui.addFolder("PointLight");

folderPointLight
  .add(pointLight, "visible")
  .name("PointLightHelper Helper visibility");

folderPointLight
  .add(pointLightHelper, "visible")
  .name("PointLight Helper visibility");

folderPointLight
  .addColor(parametersPointLight, "color")
  .onChange(() => {
    pointLight.color.set(parametersPointLight.color);
  })
  .name("color");

folderPointLight
  .add(pointLight, "intensity")
  .min(0)
  .max(1)
  .step(0.01)
  .name("intensity");

folderPointLight
  .add(pointLight, "distance")
  .min(0)
  .max(100)
  .step(0.1)
  .name("distance");

folderPointLight
  .add(pointLight, "decay")
  .min(0)
  .max(10)
  .step(0.1)
  .name("decay");

folderPointLight
  .add(pointLight.position, "x")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position X");

folderPointLight
  .add(pointLight.position, "y")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position Y");

folderPointLight
  .add(pointLight.position, "z")
  .min(-3)
  .max(3)
  .step(0.1)
  .name("position Z");

// Rect area light
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 4, 2);
rectAreaLight.position.set(-1.5, 0, 1.5);
rectAreaLight.lookAt(new THREE.Vector3());
rectAreaLight.visible = false;

const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
window.requestAnimationFrame(() => {
  rectAreaLightHelper.position.copy(rectAreaLight.position);
  rectAreaLightHelper.quaternion.copy(rectAreaLight.quaternion);
  rectAreaLightHelper.update();
});
rectAreaLightHelper.visible = false;

const parametersAreaLightt = {
  color: 0x4e00ff,
};

const folderAreaLightt = gui.addFolder("AreaLight");

folderAreaLightt.add(rectAreaLight, "visible").name("RectAreaLight visibility");

folderAreaLightt
  .add(rectAreaLightHelper, "visible")
  .name("RectAreaLight Helper visibility");

folderAreaLightt
  .addColor(parametersAreaLightt, "color")
  .onChange(() => {
    rectAreaLight.color.set(parametersAreaLightt.color);
  })
  .name("color");

folderAreaLightt
  .add(rectAreaLight, "intensity")
  .min(0)
  .max(100)
  .step(0.5)
  .name("intensity");

folderAreaLightt
  .add(rectAreaLight, "width")
  .min(1)
  .max(100)
  .step(1)
  .name("width");

folderAreaLightt
  .add(rectAreaLight, "height")
  .min(1)
  .max(100)
  .step(1)
  .name("height");

// Spot light
const spotLight = new THREE.SpotLight(
  0x78ff00,
  0.5,
  10,
  Math.PI * 0.1,
  0.25,
  1
);
spotLight.position.set(0, 2, 3);
spotLight.target.position.x = 1;
// spotLight.visible = false;

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
spotLightHelper.visible = false;
window.requestAnimationFrame(() => {
  spotLightHelper.update();
});

const folderSpotLight = gui.addFolder("SpotLight");

folderSpotLight.add(spotLight, "visible").name("SpotLight visibility");
folderSpotLight
  .add(spotLightHelper, "visible")
  .name("SpotLight Helper visibility");

const parametersSpotLight = {
  color: 0x78ff00,
};

folderSpotLight
  .add(spotLight, "intensity")
  .min(0)
  .max(100)
  .step(0.5)
  .name("intensity");

folderSpotLight
  .add(spotLight, "distance")
  .min(0)
  .max(50)
  .step(0.5)
  .name("distance");

folderSpotLight.add(spotLight, "decay").min(0).max(10).step(0.5).name("decay");

folderSpotLight
  .add(spotLight, "angle")
  .min(0)
  .max(Math.PI / 2)
  .step(0.1)
  .name("angle");

folderSpotLight
  .add(spotLight, "penumbra")
  .min(0)
  .max(1)
  .step(0.01)
  .name("penumbra");

folderSpotLight
  .add(spotLight.position, "x")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position x");

folderSpotLight
  .add(spotLight.position, "y")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position y");

folderSpotLight
  .add(spotLight.position, "z")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position z");

folderSpotLight
  .add(spotLight.target.position, "x")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position target x");

folderSpotLight
  .add(spotLight.target.position, "y")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position target y");

folderSpotLight
  .add(spotLight.target.position, "z")
  .min(-5)
  .max(5)
  .step(0.05)
  .name("position target z");

folderSpotLight
  .addColor(parametersSpotLight, "color")
  .onChange(() => {
    spotLight.color.set(parametersSpotLight.color);
  })
  .name("color");

scene.add(
  ...[
    ambientLight,
    hemisphereLight,
    hemisphereLightHelper,
    directionalLight,
    directionalLightHelper,
    spotLight,
    // He don't know why but we have to
    spotLight.target,
    spotLightHelper,
    pointLight,
    pointLightHelper,
    rectAreaLight,
    rectAreaLightHelper,
  ]
);

/**
 * Objects
 */
// Material
// LIGH AFFECT
// const material = new THREE.MeshPhysicalMaterial();
// const material = new THREE.MeshPhongMaterial();
// const material = new THREE.MeshToonMaterial();
const material = new THREE.MeshStandardMaterial();
// const material = new THREE.MeshLambertMaterial();

// LIGHT DOESNT AFFECT
// const material = new THREE.MeshMatcapMaterial();
// const material = new THREE.MeshDistanceMaterial();
// const material = new THREE.MeshDepthMaterial();
// const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshBasicMaterial();
material.roughness = 0.4;

// Objects
const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 32, 32),
  material
);
sphere.position.x = -1.5;
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(0.75, 0.75, 0.75),
  material
);

const torus = new THREE.Mesh(
  new THREE.TorusBufferGeometry(0.3, 0.2, 32, 64),
  material
);
torus.position.x = 1.5;

const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(5, 5), material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.65;

const cubeFar = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), material);
cubeFar.position.set(5, -5, 0);
scene.add(sphere, cube, torus, cubeFar, plane);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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

  // Update objects
  sphere.rotation.y = 0.1 * elapsedTime;
  cube.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  cube.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // Make all uppdate Here
  spotLightHelper.update();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
