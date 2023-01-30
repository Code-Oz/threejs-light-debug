import { commonGuiFactory } from "../common-gui-factory";

const min = -5;
const max = 5;
const step = 0.1;
const coordinateX = "x";
const coordinateY = "y";
const coordinateZ = "z";

const createLabel = (prefix, cordinate) => {
  return `${prefix} - ${cordinate}`;
};

export const positionGui = (
  folder,
  objectPosition,
  labelPrefix = "position"
) => {
  commonGuiFactory(coordinateX)(
    folder,
    objectPosition,
    createLabel(labelPrefix, coordinateX)
  )
    .min(min)
    .max(max)
    .step(step);
  commonGuiFactory(coordinateY)(
    folder,
    objectPosition,
    createLabel(labelPrefix, coordinateY)
  )
    .min(min)
    .max(max)
    .step(step);
  commonGuiFactory(coordinateZ)(
    folder,
    objectPosition,
    createLabel(labelPrefix, coordinateZ)
  )
    .min(min)
    .max(max)
    .step(step);
};
