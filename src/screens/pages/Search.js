import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { COLORS, foodData } from "../../styles/Theme";
import SearchInputField from "../../component/SearchInputField";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { renderKeyword } from "../../component/KeywordUi";

export default function Search() {
  const renderItemImage = ({ item }) => (
    <View
      style={{
        marginBottom: 20,
        flexDirection: "row",
        columnGap: 15,
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          backgroundColor: "grey",
          width: 70,
          height: 60,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <FontAwesome
            name="star-o"
            size={20}
            color={COLORS.primary}
            style={{ fontWeight: "bold" }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 14, marginLeft: 5 }}>
            4.3
          </Text>
        </View>
      </Pressable>
    </View>
  );

 

  const ListHeader = () => (
    <View style={{ backgroundColor: "white",  }}>
      <SearchInputField />
      <Text style={{ fontSize: 18 }}>Recent Keywords</Text>
      <FlatList
        data={foodData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderKeyword}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
      <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 15 }}>
        Suggested Restaurants
      </Text>
    </View>
  );

  return (
    <Animatable.View
      animation="slideInDown"
      duration={600}
      delay={100}
      easing="ease-out-cubic"
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <FlatList
        data={foodData.slice(0, 4)}
        keyExtractor={(item) => item.id}
        renderItem={renderItemImage}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      />
    </Animatable.View>
  );
}

