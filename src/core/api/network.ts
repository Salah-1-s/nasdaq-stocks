import axios, { AxiosRequestConfig } from "axios";
import { POLYGON_API_KEY } from "@env";

export class Network {
  public static fetch(url: string, init: AxiosRequestConfig): Promise<any> {
    const requestInit: AxiosRequestConfig = {
      url,
      ...init,
      headers: {
        Authorization: `Bearer ${POLYGON_API_KEY}`,
      },
    };

    return axios
      .request(requestInit)
      .catch((error) => {
        return console.error(error);
      })
      .then((response) => {
        return response;
      });
  }
}
