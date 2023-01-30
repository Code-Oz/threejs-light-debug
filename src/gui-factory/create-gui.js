import * as dat from "dat.gui";

export const createDebugGUI = () => {
  const gui = new dat.GUI();

  const folderMesh = gui.addFolder("Mesh");
  const folderMeshCommon = gui.addFolder("Common");
  const folderMeshCube = folderMesh.addFolder("Main Cube");
  const folderMeshCubeFar = folderMesh.addFolder("Far Cube");
  const folderMeshFloor = folderMesh.addFolder("Floor");
  const folderMeshTorus = folderMesh.addFolder("Torus");
  const folderMeshSphere = folderMesh.addFolder("Sphere");

  const folderDirectionnalLight = gui.addFolder("DirectionnalLight");

  return {
    folderDirectionnalLight,
    folderMeshCube,
    folderMeshCommon,
    folderMeshCubeFar,
    folderMesh,
    folderMeshFloor,
    folderMeshTorus,
    folderMeshSphere,
  };
};
