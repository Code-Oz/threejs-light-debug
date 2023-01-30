import { defaultMaterial } from "../../config";
import { materialObject } from "../../mesh-factory/material-factory";

const property = "material";
const materialList = Object.keys(materialObject);

export const changeMaterialGUI = (folder, object, label = property) => {
  const parameters = {
    // TODO sync default material with this
    material: materialList[0],
  };

  folder
    .add(parameters, property, materialList)
    .name(label)
    .onChange((key) => {
      object.material = materialObject[key];
    });
};
