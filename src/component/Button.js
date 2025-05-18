import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/Theme';


export default function Button({ title = "BUTTON", onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.nextButton, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "bold",
    textTransform:"uppercase",
  },
});
