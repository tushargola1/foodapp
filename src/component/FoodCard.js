import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../styles/Theme";

export default function FoodCard() {

  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: "white",
        paddingBottom: 20,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc", // or any color you like
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 170,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      ></View>
      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <View>
          <Text style={{ fontSize: 22, color: "black", fontWeight: "400" }}>
            Rose Garden Restaurant
          </Text>
          {/* <View
            style={{
              backgroundColor: "green",
              borderRadius: 10,
              color: "white",
              paddingHorizontal: 10,
              paddingVertical: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "center",
            }}
          >
            <FontAwesome name="star" size={15} color="white" />
            <Text style={{ color: "white" }}>4.3</Text>
          </View> */}

          <Text style={{ fontSize: 15, color: COLORS.textLight, marginTop: 4 }}>
            Burger - Chicken - Rolls - Fries
          </Text>

          <View
            style={{
              color: "white",
              paddingVertical: 1,
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 15,
              width: "75%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="star-o"
                size={20}
                color={COLORS.primary}
                style={{ fontWeight: "bold" }}
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
                style={{ fontWeight: "bold" }}
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
                style={{ fontWeight: "bold" }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 5 }}>
                20 min
              </Text>
            </View>
          </View>
        </View>
      </View>
   
    </View>
  );
}

