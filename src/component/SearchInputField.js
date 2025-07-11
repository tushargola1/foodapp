import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../styles/Theme";

export default function SearchInputField({ navigation }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const isSearchScreen = !navigation;

  useEffect(() => {
    if (isSearchScreen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchScreen]);

  const handlePress = () => {
    if (!isSearchScreen && navigation) {
      navigation.navigate("search");
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={isSearchScreen ? 1 : 0.9}
      onPress={handlePress}
      style={styles.searchContainer}
    >
      <AntDesign
        name="search1"
        size={20}
        color="#395998"
        style={styles.searchIcon}
      />

      <TextInput
        ref={inputRef}
        placeholder="Search for food, restaurants..."
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholderTextColor="#888"
        editable={isSearchScreen} // disable input on home
        onFocus={handlePress}
        pointerEvents={isSearchScreen ? "auto" : "none"}
      />

      {text.length > 0 && isSearchScreen && (
        <Pressable onPress={() => setText("")} style={styles.clearButton}>
          <AntDesign name="close" size={14} color="white" />
        </Pressable>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.background,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    // marginTop: 10,
    // marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  clearButton: {
    backgroundColor: "#CDCDCF",
    borderRadius: 20,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
