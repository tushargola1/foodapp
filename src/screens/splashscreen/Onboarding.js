import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const pages = [
  {
    title: "All your favorites",
    subtitle:
      "Get all your loved foods in one once place,\nyou just place the order we do the rest",
  },
  {
    title: "Fast Delivery",
    subtitle:
      "We deliver your order instantly with our\ntrusted delivery partners",
  },
  {
    title: "Track Your Order",
    subtitle: "Real-time tracking of your orders\nfrom kitchen to your door",
  },
  {
    title: "Get Started Now!",
    subtitle: "Sign up and enjoy amazing food\nat your fingertips",
  },
];

const Onboarding = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentPage + 1 });

    } else {
      redirectNextPage()
    }
  };

  const redirectNextPage = () =>{
    navigation.reset({
      index: 0,  
      routes: [{ name: 'login' }],  
    });
  }
 
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentPage(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: "#fff",
        }}
      >
        <FlatList
          ref={flatListRef}
          data={pages}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.page}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.subtitle, { marginBottom: 30 }]}>
                {item.subtitle}
              </Text>
              <View style={styles.dotMainContainer}></View>
            </View>
          )}
        />
        <View style={styles.footer}>
          <View style={styles.dotsContainer}>
            {pages.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentPage === index && styles.activeDot]}
              />
            ))}
          </View>
          <TouchableHighlight style={styles.nextButton} onPress={handleNext} underlayColor="#FF7622">
            <Text style={styles.nextText}>
              {currentPage === pages.length - 1 ? "GET STARTED" : "NEXT"}
            </Text>
          </TouchableHighlight>
          {currentPage !== pages.length - 1 && (
            <TouchableOpacity onPress={redirectNextPage}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Fixed footer */}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slideContainer: {
    backgroundColor: "red",
  },
  page: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 250,
    backgroundColor: "#a0aec0",
    borderRadius: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3748",
  },
  subtitle: {
    fontSize: 14,
    color: "#718096",
    textAlign: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fdeae1",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF7622",
  },
  nextButton: {
    backgroundColor: "#FF7622",
    borderRadius: 10,
    paddingVertical: 15,
    width: 300,
    alignItems: "center",
    marginBottom: 10,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
  skipText: {
    color: "#718096",
    fontSize: 14,
  },
});
