export const setItem = (item: string, data: object) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const getItem = (item: string) => {
  const data = localStorage.getItem(item);
  return data ? JSON.parse(data) : null;
};
