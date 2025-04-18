import { getCookie } from "cookies-next/client";

export const token =
  typeof window !== "undefined" ? getCookie("token") : false;

export const bio =
  typeof window !== "undefined" ? getCookie("bio") : false;

  export const username =
  typeof window !== "undefined" ? getCookie("username") : false;



export const name =
  typeof window !== "undefined" ? getCookie("name") : false;

