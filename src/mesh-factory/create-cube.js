import * as THREE from "three";

export const createCube = (size, position, material) => {
  const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(size, size, size),
    material
  );
  cube.position.set(position.x, position.y, position.z);
  return cube;
};
