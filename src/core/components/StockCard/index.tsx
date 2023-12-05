import { Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StockType } from "../../types/stock.types";

import { stockCardStyles } from "./styles";

interface StockCardProps {
  stock: StockType;
}

export default function StockCard({ stock }: StockCardProps) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={stockCardStyles.container}
      onPress={() => navigation.navigate("Details" as never)}
    >
      <Image
        source={require("../../assets/images/empty-image.jpg")}
        alt={stock.name}
        style={stockCardStyles.image}
      />
      <Text style={stockCardStyles.ticker}>{stock.ticker}</Text>
      <Text style={stockCardStyles.name}>{stock.name}</Text>
    </Pressable>
  );
}
