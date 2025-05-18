import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantModal({ visible, onClose }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
      useNativeDriver={true}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Sita Ram Bhature</Text>
        <View style={styles.innerContent}>
          <Pressable onPress={onClose} style={styles.text}>
            <Ionicons
              name="bookmark-outline"
              size={25}
              color="black"
              onPress={onClose}
            />
            <Text style={styles.option}>Add to Collection</Text>
          </Pressable>
          <Pressable onPress={onClose} style={styles.text}>
            <SimpleLineIcons
              name="exclamation"
              size={25}
              color="black"
              onPress={onClose}
            />
            <Text style={styles.option}>See more about this restaurant</Text>
          </Pressable>
          <Pressable onPress={onClose} style={styles.text}>
            <MaterialCommunityIcons
              name="share-outline"
              size={25}
              color="black"
              onPress={onClose}
            />
            <Text style={styles.option}>Share this restaurant</Text>
          </Pressable>
        </View>
        <Ionicons
          name="close"
          size={25}
          color="white"
          style={styles.close}
          onPress={onClose}
        />
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
    backgroundColor: "#f5f6fb",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "relative",
    height: "50%",
  },
  innerContent: {
    backgroundColor: "white",
    height: "85%",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    borderBottomWidth: 0.2,
    borderColor: "black",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  close: {
    position: "absolute",
    top: "-50",
    left: "50%",
    backgroundColor: "#41414f",
    padding: 7,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  option: {
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: "600",
    color: "black",
    
  },
});
