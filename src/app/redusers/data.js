export const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : false;