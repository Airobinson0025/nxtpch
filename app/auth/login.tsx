import LoginForm from "@/components/forms/LoginForm";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black", padding: 10 }}>
      <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
        Login to your Next Pitch profile
      </Text>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({

})