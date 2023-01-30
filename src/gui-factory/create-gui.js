import * as dat from "dat.gui";

export const createDebugGUI = () => {
  const gui = new dat.GUI();

  const folderMesh = gui.addFolder("Mesh");
  const folderMeshCommon = folderMesh.addFolder("Common");
  const folderMeshCube = folderMesh.addFolder("Main Cube");
  const folderMeshCubeFar = folderMesh.addFolder("Far Cube");
  const folderMeshFloor = folderMesh.addFolder("Floor");
  const folderMeshTorus = folderMesh.addFolder("Torus");
  const folderMeshSphere = folderMesh.addFolder("Sphere");

  const folderLight = gui.addFolder("Lights");
  const folderDirectionnalLight = folderLight.addFolder("DirectionnalLight");
  const folderAmbientLight = folderLight.addFolder("AmbientLight");
  const folderHemisphereLight = folderLight.addFolder("HemisphereLight");
  const folderPointLight = folderLight.addFolder("PointLight");
  const folderReactAreaLight = folderLight.addFolder("ReactArea");
  const folderSpotLight = folderLight.addFolder("SpotLight");

  return {
    folderDirectionnalLight,
    folderMeshCube,
    folderMeshCommon,
    folderMeshCubeFar,
    folderMesh,
    folderMeshFloor,
    folderMeshTorus,
    folderMeshSphere,
    folderAmbientLight,
    folderHemisphereLight,
    folderPointLight,
    folderReactAreaLight,
    folderSpotLight,
  };
};
