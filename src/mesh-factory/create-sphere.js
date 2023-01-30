import * as THREE from "three";

export const createSphere = (radius, position, material) => {
  const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    material
  );
  sphere.position.set(position.x, position.y, position.z);
  return sphere;
};
