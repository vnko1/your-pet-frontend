export const compareObjects = (obj1, obj2) => {
  const result = {};

  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
      result[key] = obj2[key];
    }
  }

  return result;
};
