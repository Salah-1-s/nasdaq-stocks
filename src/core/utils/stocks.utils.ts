import { StockAPI } from "../api/stocks.api";
import { Payload } from "../types/common.types";
import { StockType } from "../types/stock.types";

export class StockUtils {
  public static getStock(search: string): Promise<Payload<StockType[]>> {
    return StockAPI.getStocks(search)
      .then((result) => {
        return result?.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  public static getStockNextPage(
    search: string,
    url: string
  ): Promise<Payload<StockType[]>> {
    return StockAPI.getStocksNextPage(search, url)
      .then((result) => {
        return result?.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
