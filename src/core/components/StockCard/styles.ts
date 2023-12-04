import { Colors } from "./../../styles/settings/colors";
import { StyleSheet } from "react-native";

export const stockCardStyles = StyleSheet.create({
  container: {
    width: "47%",
    aspectRatio: 1 / 1,
    padding: 8,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: Colors.navy400,
  },

  image: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 14,
  },

  ticker: {
    fontSize: 16,
    color: Colors.white100,
    fontWeight: "bold",
    textAlign: "center",
  },

  name: {
    fontSize: 12,
    color: Colors.white200,
    textAlign: "center",
  },
});
