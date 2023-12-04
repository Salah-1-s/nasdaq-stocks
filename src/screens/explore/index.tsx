import { useEffect, useState } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import StockCard from "../../core/components/StockCard";
import { StockUtils } from "../../core/utils/stocks.utils";
import { StockType } from "../../core/types/stock.types";

import { Colors } from "../../core/styles/settings/colors";
import { exploreStyles } from "./styles";

export default function ExploreScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [stockData, setStockData] = useState<StockType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState<string>();

  const fetchStockData = () => {
    StockUtils.getStock(searchValue)
      .then((res) => {
        setStockData(res?.results);
        setNextPageUrl(res?.next_url || undefined);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const fetchStockNextPage = () => {
    if (!nextPageUrl) {
      return;
    }

    setIsLoadingNextPage(true);
    StockUtils.getStockNextPage(searchValue, nextPageUrl)
      .then((res) => {
        setStockData((prev) => [...prev, ...res?.results]);
        setNextPageUrl(res?.next_url || undefined);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoadingNextPage(false));
  };

  useEffect(() => {
    setIsLoading(true);
    const getStockData = setTimeout(() => {
      fetchStockData();
    }, 1000);

    return () => clearTimeout(getStockData);
  }, [searchValue]);

  return (
    <View style={exploreStyles.container}>
      <TextInput
        placeholder="Search for stacks"
        style={exploreStyles.searchInput}
        value={searchValue}
        placeholderTextColor={Colors.navy500}
        onChangeText={(text) => setSearchValue(text)}
      />

      {isLoading && (
        <ActivityIndicator
          size="large"
          style={{ marginVertical: 20 }}
          color={Colors.white200}
        />
      )}

      {!isLoading && (
        <FlatList
          style={exploreStyles.list}
          data={stockData}
          renderItem={({ item }) => <StockCard stock={item} />}
          numColumns={2}
          contentContainerStyle={exploreStyles.listContent}
          columnWrapperStyle={exploreStyles.listColumn}
          // TODO change this key in case the api provided a unique identifier
          keyExtractor={(item) =>
            `${item.ticker}${item.name}${item.last_updated_utc}`
          }
          showsVerticalScrollIndicator={false}
          onEndReached={fetchStockNextPage}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            isLoadingNextPage ? (
              <ActivityIndicator color={Colors.white200} />
            ) : null
          }
        />
      )}
    </View>
  );
}
