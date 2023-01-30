export const addToSceneWrapper = (scene) => {
  return (objects) => {
    Array.isArray(objects) ? scene.add(...objects) : scene.add(objects);
    return objects;
  };
};
