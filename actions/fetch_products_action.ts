"use server";

import { baseUrl } from "phi/config/domain";

//For Fetch Products
export const getAllroducts_server_actions = async (endPoint: string) => {
    try {
      let response = await fetch(`${baseUrl}${endPoint}`, {
        cache: "no-cache"
      });
      let data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
};


