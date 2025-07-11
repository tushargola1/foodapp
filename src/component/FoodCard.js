import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../styles/Theme";
import { useNavigation } from "@react-navigation/native"; // ✅ Import the hook

export default function FoodCard() {
  const navigation = useNavigation(); // ✅ Get navigation

  return (
    <TouchableOpacity
      style={{
        marginVertical: 10,
        backgroundColor: "white",
        paddingBottom: 20,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
      onPress={() => navigation.navigate("restaurant")}
      activeOpacity={0.8}
    >
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 170,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      />
      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 22, color: "black", fontWeight: "400" }}>
          Rose Garden Restaurant
        </Text>
        <Text style={{ fontSize: 15, color: COLORS.textLight, marginTop: 4 }}>
          Burger - Chicken - Rolls - Fries
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "space-between",
            width: "75%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome
              name="star-o"
              size={20}
              color={COLORS.primary}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 5 }}>
              4.3
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="bike-fast"
              size={20}
              color={COLORS.primary}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 5 }}>
              Free
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={20}
              color={COLORS.primary}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 5 }}>
              20 min
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
