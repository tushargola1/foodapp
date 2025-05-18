import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default function AddressModal({ visible, onClose }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Choose Delivery Address</Text>
        <Pressable onPress={onClose}>
          <Text style={styles.option}>🏢 Halal Lab Office</Text>
        </Pressable>
        <Pressable onPress={onClose}>
          <Text style={styles.option}>🏠 Home</Text>
        </Pressable>
        <Pressable onPress={onClose}>
          <Text style={styles.option}>➕ Add New Location</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  content: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  option: {
    fontSize: 16,
    paddingVertical: 10,
  },
});
