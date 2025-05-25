import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={{ height: 400 }}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{
              width,
              height: "100%",
              resizeMode: "cover",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        )}
      />
      {/* Pagination Dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 10,
          width: "100%",
        }}
      >
        {images.map((_, i) => (
          <View
            key={i}
            style={{
              height: 8,
              width: 8,
              borderRadius: 10,
              backgroundColor: i === activeIndex ? "#fff" : "#fff",
              margin: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
}
