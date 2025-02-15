export const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : false;


export const name =
  typeof window !== "undefined" ? localStorage.getItem("name") : false;