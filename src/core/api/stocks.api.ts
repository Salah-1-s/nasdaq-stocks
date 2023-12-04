import { AxiosResponse } from "axios";
import { ENDPOINTS } from "./endpoints";
import { Network } from "./network";
import { StockType } from "../types/stock.types";
import { Payload } from "../types/common.types";

export class StockAPI {
  public static getStocks(
    search: string
  ): Promise<AxiosResponse<Payload<StockType[]>>> {
    return Network.fetch(`${ENDPOINTS.getStocks.path}`, {
      method: ENDPOINTS.getStocks.method,
      params: { search, limit: 20 },
    });
  }

  public static getStocksNextPage(
    search: string,
    url: string
  ): Promise<AxiosResponse<Payload<StockType[]>>> {
    return Network.fetch(`${url}`, {
      method: ENDPOINTS.getStocks.method,
      params: { search, limit: 20 },
    });
  }
}
