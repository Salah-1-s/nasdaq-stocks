import { StyleSheet } from "react-native";
import { Colors } from "../../core/styles/settings/colors";

export const exploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 18,
  },

  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: Colors.navy400,
    height: 40,
    borderRadius: 18,
    color: Colors.white100,
  },

  list: {
    marginTop: 18,
    marginBottom: 70,
  },

  listContent: {
    gap: 18,
  },

  listColumn: {
    gap: 18,
  },
});
