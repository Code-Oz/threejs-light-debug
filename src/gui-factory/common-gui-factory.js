// Property that are natively handled by GUI
export const commonGuiFactory = (property) => {
  return (folder, object, label = `${property}`) => {
    return folder.add(object, property).name(label);
  };
};
