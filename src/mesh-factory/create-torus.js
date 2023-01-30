import * as THREE from "three";

export const createTorus = (radius, position, material) => {
  const torus = new THREE.Mesh(
    new THREE.TorusBufferGeometry(radius, 0.2, 32, 64),
    material
  );
  torus.position.set(position.x, position.y, position.z);
  return torus;
};
