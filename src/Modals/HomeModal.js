import React, { useState } from "react";
import { Modal, View, Text, Pressable, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles/Theme";
export default function HomeModal() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <LinearGradient
          colors={["#CDB900", "#E76F00"]}
          style={styles.modalBackground}
        >
          <View style={styles.modalView}>
            <Pressable
              style={{
                position: "absolute",
                top: -19,
                right: 2,
                backgroundColor: "#FFE194",
                padding: 10,
                borderRadius: 50,
                zIndex: 1,
              }}
              onPress={() => setModalVisible(false)}
            >
              <AntDesign name="close" size={20} color={COLORS.primary} />
            </Pressable>

            <Text style={styles.modalText}>Hurry Offers!</Text>
            <Text style={styles.modalText2}>#12DSA</Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                marginBottom: 25,
              }}
            >
              Use the coupon to get 25% discount
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>GOT IT</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBackground: {
    borderRadius: 20,
    padding: 1,
    position: "relative",
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    minWidth: 320,
    maxWidth: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 8,
    width: "100%",
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
  modalText2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    letterSpacing: 3,
  },
});
