import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, foodData } from "../../styles/Theme";
import RestaurantModal from "../../Modals/RestaurantModal";
import KeywordUi, { renderKeyword } from "../../component/KeywordUi";
import FoodCard from "../../component/FoodCard";
import ImageCarousel from "../../component/ImageCarousel";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SearchInputField from "../../component/SearchInputField";
const HEADER_EXPANDED_HEIGHT = 400;
const HEADER_COLLAPSED_HEIGHT = 100;

const { width } = Dimensions.get("window");

export default function RestaurantView({ navigation, route }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  const toggleFaq = (index) => {
    setIsExpanded(isExpanded === index ? null : index);
  };
  const {
    name = "Restaurant Name",
    image = [
      "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
      "sdds",
    ],
    rating = 4.3,
    delivery = "Free",
    time = "20 min",
    description = "Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Maecenas sed diam eget risus varius blandit sit amet non magna.",
  } = route?.params || {};

  const titles = ["Pizza Calzone European"];
  const faqs = [
    {
      question: "What is React Native?",
      answer:
        "React Native is a JavaScript framework for writing real, natively rendering mobile apps for iOS and Android.",
    },
    {
      question: "What is Expo?",
      answer:
        "Expo is a framework and a platform for universal React applications.",
    },
    {
      question: "Can I use native code with Expo?",
      answer:
        "You can in the Bare workflow or with a custom development client.",
    },
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <RestaurantModal visible={isModalVisible} onClose={toggleModal} />

      {/* Animated Sticky Header */}
      <Animated.View
        style={[
          styles.header,
          { height: headerHeight, backgroundColor: "white" },
        ]}
      >
        <Animated.View style={[{ opacity: headerControlsOpacity }]}>
          <ImageCarousel images={image} />
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

        <Animated.View
          style={[styles.heartIcon, { opacity: headerControlsOpacity }]}
        >
          <Entypo name="heart-outlined" color={"black"} size={22} />
        </Animated.View>
      </Animated.View>

      {/* Sticky Title (fades in when header collapses) */}
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.stickyTitle,
          {
            opacity: headerTitleOpacity,
            alignItems: "center",
            top: 35,
            backgroundColor: "transparent",
            // height: "70",
          },
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
        <View style={{ marginHorizontal: 20 }}>
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

        <View>
          {faqs.map((item, index) => (
            <View key={index} style={styles.faqContainer}>
              <View style={styles.faqHeader}>
                <Text
                  onPress={() => toggleFaq(index)}
                  style={styles.questionText}
                >
                  {item.question}
                </Text>
                <Pressable onPress={() => toggleFaq(index)}>
                  <AntDesign
                    name={isExpanded === index ? "caretup" : "caretdown"}
                    size={18}
                    color="black"
                  />
                </Pressable>
              </View>
              {isExpanded === index && (
                <View>
                  <View style={styles.answerBox}>
                    <View style={{ flexDirection: "column", gap: 5, flex: 1 }}>
                      <MaterialCommunityIcons
                        name="square-circle"
                        size={18}
                        color="green"
                      />
                      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Malai soya chap
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <FontAwesome
                          name="rupee"
                          size={17}
                          color="black"
                          style={{ fontWeight: "bold" }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                          450
                        </Text>
                      </View>
                      <Text style={{ fontSize: 15 }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </Text>
                    </View>
                    <View
                      style={{ width: 150, height: 150, position: "relative" }}
                    >
                      <Image
                        source={{ uri: image[0] }}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "cover",
                          borderRadius: 20,
                        }}
                      />

                      <View
                        style={{
                          position: "absolute",
                          bottom: "-10",
                          left: "50%",
                          transform: [{ translateX: -50 }],
                          backgroundColor: "rgba(196, 117, 117, 0.67)",
                          paddingHorizontal: 20,
                          paddingVertical: 6,
                          borderRadius: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 6,
                          borderWidth: 1,
                          borderColor: COLORS.primary,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        >
                          Add
                        </Text>
                        <AntDesign name="plus" size={16} color="white" />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      </Animated.ScrollView>
      <View
        style={{
          backgroundColor: COLORS.white,
          position: "absolute",
          bottom: "0",
          zIndex: 1000,
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          // justifyContent:"space-between",
          gap: 15,
        }}
      >
        <View style={{ flex: 1 }}>
          <SearchInputField />
        </View>
        <View
          style={{
            flex: 1 / 4,
            backgroundColor: "black",
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={18}
            color="white"
          />
          <Text style={{ color: COLORS.white, fontSize: 15 }}>Menu</Text>
          <View
            style={{
              position: "absolute",
              right: 3,
              bottom: 60,
              backgroundColor: "red",
              borderRadius: 10,
              padding: 10,
              width: 300,
              maxHeight: 300,
              zIndex: 1000,
            }}
          >
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ paddingBottom: 10 }}
              showsVerticalScrollIndicator={true}
            >
              {Array.from({ length: 20 }).map((_, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>hello</Text>
                  <Text style={{ fontSize: 18 }}>02</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    justifyContent: "center",
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
    marginVertical: 15,
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
    fontWeight: "500",
    textTransform: "capitalize",
  },
  faqContainer: {
    backgroundColor: "whitesmoke",
    marginBottom: 10,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    paddingRight: 10,
  },
  answerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderStyle: "dashed",
    paddingVertical: 30,
    flex: 1,
  },
  answerText: {
    fontSize: 14,
    color: "#444",
  },
  plusIcon: {
    fontWeight: "bold",
  },
});
