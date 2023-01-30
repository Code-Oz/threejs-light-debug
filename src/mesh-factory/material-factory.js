import * as THREE from "three";
// LIGH AFFECT
export const materialPhysical = new THREE.MeshPhysicalMaterial();
export const materialPong = new THREE.MeshPhongMaterial();
export const materialToon = new THREE.MeshToonMaterial();
export const materialStandard = new THREE.MeshStandardMaterial();
export const materialLambert = new THREE.MeshLambertMaterial();

// LIGHT DOESNT AFFECT
export const materialMatcap = new THREE.MeshMatcapMaterial();
export const materialDistance = new THREE.MeshDistanceMaterial();
export const materialDepth = new THREE.MeshDepthMaterial();
export const materialNormal = new THREE.MeshNormalMaterial();
export const materialBasic = new THREE.MeshBasicMaterial();

export const materialObject = {
  materialPhysical,
  materialPong,
  materialToon,
  materialStandard,
  materialLambert,
  materialMatcap,
  materialDistance,
  materialDepth,
  materialNormal,
  materialBasic,
};
