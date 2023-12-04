import { View, Image } from "react-native";

import { navbarStyles } from "./styles";

export default function Navbar() {
  return (
    <View style={navbarStyles.container}>
      <Image
        source={require("../../assets/images/nasdaq-logo.jpg")}
        resizeMode="cover"
        style={navbarStyles.logo}
      />
    </View>
  );
}
