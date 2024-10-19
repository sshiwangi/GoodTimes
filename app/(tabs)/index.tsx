import "../../global.css";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#0A0A0F", "#1A1A2E"]} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 40,
        }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg",
            }}
            style={{
              width: 180,
              height: 180,
              marginBottom: 60,
              borderRadius: 20,
            }}
          />
        </View>

        <View
          style={{ alignItems: "center", width: "100%", paddingHorizontal: 20 }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontFamily: "Roboto_700Bold",
              marginBottom: 8,
            }}
          >
            GoodTimes{" "}
          </Text>
          <Text
            style={{
              color: "#8E8E93",
              fontSize: 16,
              fontFamily: "Roboto_400Regular",
              marginBottom: 30,
            }}
          >
            Easy way for all your transactions
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#0A84FF",
              width: "100%",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Roboto_700Bold",
              }}
            >
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
