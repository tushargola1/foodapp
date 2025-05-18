import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../styles/Theme";
import RestaurantModal from "../../Modals/RestaurantModal";

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 100;

const { width } = Dimensions.get("window");

export default function RestaurantView({ navigation, route }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  const {
    name = "Restaurant Name",
    image = "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
    rating = 4.3,
    delivery = "Free",
    time = "20 min",
    description = "This is a sample restaurant description.",
  } = route?.params || {};

  const titles = [
    "Pizza Calzone European",
    "Spaghetti Bolognese Italian",
    "Sushi Rolls Japanese",
    "Tacos al Pastor Mexican",
    "Butter Chicken Indian",
    "Croissant French Bakery",
    "Pad Thai Thai Street",
    "Shawarma Middle Eastern",
  ];

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - 150],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const headerControlsOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RestaurantModal visible={isModalVisible} onClose={toggleModal} />

      {/* Animated Sticky Header */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.View style={[{ opacity: headerControlsOpacity }]}>
          <Image source={{ uri: image }} style={styles.headerImage} />
        </Animated.View>

        <Animated.View
          style={[
            styles.headerControls,
            { opacity: headerControlsOpacity, top: 50 },
          ]}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={22}
              color="white"
              style={[styles.iconStyle, { backgroundColor: "#0008" }]}
            />
          </Pressable>
          <Pressable onPress={toggleModal}>
            <Ionicons
              name="ellipsis-horizontal-sharp"
              size={25}
              color="white"
              style={[styles.iconStyle, { backgroundColor: "#0008" }]}
            />
          </Pressable>
        </Animated.View>

        {/* Floating heart icon */}
        <Animated.View
          style={[styles.heartIcon, { opacity: headerControlsOpacity }]}
        >
          <Entypo name="heart-outlined" color={"black"} size={22} />
        </Animated.View>
      </Animated.View>

      {/* Sticky Title (fades in when header collapses) */}
      <Animated.View
        style={[
          styles.stickyTitle,
          { opacity: headerTitleOpacity, alignItems: "center", top: 35 , backgroundColor:"red" , height:"100%" },
          styles.headerControls,
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            size={22}
            color="black"
            style={styles.iconStyle}
          />
        </Pressable>
        <Text style={styles.stickyTitleText}>{name}</Text>

        <Pressable onPress={toggleModal}>
          <Ionicons
            name="ellipsis-horizontal-sharp"
            size={25}
            color="black"
            style={styles.iconStyle}
          />
        </Pressable>
      </Animated.View>

      {/* Scrollable content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: HEADER_EXPANDED_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <FontAwesome name="star-o" size={20} color={COLORS.primary} />
            <Text style={styles.statText}>{rating}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="bike-fast"
              size={20}
              color={COLORS.primary}
            />
            <Text style={styles.statText}>{delivery}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={20}
              color={COLORS.primary}
            />
            <Text style={styles.statText}>{time}</Text>
          </View>
        </View>

        {/* Demo sections */}
        {titles.map((title, index) => (
          <View key={index} style={{ margin: 20 }}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.description}>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Integer posuere erat a ante.
            </Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 10,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerControls: {
    position: "absolute",
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    backgroundColor: "#ECF0F4",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },
  heartIcon: {
    position: "absolute",
    bottom: 15,
    right: 20,
    backgroundColor: COLORS.background,
    padding: 6,
    borderRadius: 20,
  },
  stickyTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    justifyContent: "center", // Vertically center text
    zIndex: 99,
  },
  stickyTitleText: {
    fontSize: 18,
    fontWeight: "700",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  description: {
    color: COLORS.textColor,
    fontSize: 15,
    marginTop: 10,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textTransform: "capitalize",
  },
});
