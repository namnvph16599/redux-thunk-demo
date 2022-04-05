
export const setLocalStorage = (user, next) => {
  localStorage.setItem("user", JSON.stringify(user));
  next();
};
export const getLocalStorage = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user"));
};
