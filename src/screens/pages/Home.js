import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewBase,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import { COLORS, foodData } from "../../styles/Theme";
import { useLayoutEffect, useState } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FoodCard from "../../component/FoodCard";
import HomeModal from "../../Modals/HomeModal";
import SearchInputField from "../../component/SearchInputField";
import AddressModal from "../../Modals/AddressModal";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const cardWidth = width / 2.5;
export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Pressable onPress={toggleModal}>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: "#f15c22", // or COLORS.primary
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Deliver to
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Halal Lab office</Text>
              <Ionicons
                name="chevron-down"
                size={15}
                color="black"
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </Pressable>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={{ marginRight: 10, marginTop: 20 }}>
      {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      ></View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
      }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <HomeModal />
      <AddressModal visible={isModalVisible} onClose={toggleModal} />

      <Text style={{ marginTop: 10 }}>
        Hey Halal, <Text style={{ fontWeight: "bold" }}>Good Afternoon!</Text>
      </Text>
      <SearchInputField navigation={navigation} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18 }}>All Categories</Text>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={{ marginTop: 5 }}>See All</Text>
          <EvilIcons name="chevron-right" size={30} color="#395998" />
        </View>
      </View>

      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 18 }}>Open Restaurants</Text>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={{ marginTop: 5 }}>See All</Text>
          <EvilIcons name="chevron-right" size={30} color="#395998" />
        </View>
      </View>
      {Array.from({ length: 5 }).map((_, index) => (
        <FoodCard key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
    marginTop: 5,
  },
  desc: {
    fontSize: 13,
    color: "#555",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "#28a745",
  },
});
