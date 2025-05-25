import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { foodData } from "../styles/Theme";

export default function KeywordList() {
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [keywordsData, setKeywordsData] = useState(foodData);

  const handleKeywordPress = (keyword) => {
    setSelectedKeyword(keyword);

    const reordered = [
      ...foodData.filter((item) => item.keywords[0] === keyword),
      ...foodData.filter((item) => item.keywords[0] !== keyword),
    ];

    setKeywordsData(reordered);
  };

  const renderKeyword = ({ item }) => {
    const keyword = item.keywords[0];
    const isActive = selectedKeyword === keyword;

    return (
      <Pressable onPress={() => handleKeywordPress(keyword)}>
        <View style={{ marginRight: 10 }}>
          <Text style={[styles.keyword, isActive && styles.activeKeyword]}>
            {keyword}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={keywordsData} 
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={renderKeyword}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  keyword: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
    textTransform: "capitalize",
    fontSize: 15,
    borderColor: "#EDEDED",
    color: "#333",
  },
  activeKeyword: {
    borderColor: "#ff6347",
    backgroundColor: "#ff6347",
    color: "#fff",
  },
});
