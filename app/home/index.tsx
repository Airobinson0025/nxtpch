import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        This is the login page!
      </Text>
    </View>
  );
}