import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Checkbox from "expo-checkbox";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../styles/Theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Button from "../../component/Button";

export default function ForgotPass({ navigation }) {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [isChecked, setChecked] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: COLORS.secondary,
      }}
    >
      <Image
        source={require("../../../assets/eclipse.png")}
        style={styles.leftImage}
      />
      <Pressable
        onPress={() => navigation.navigate("login")}
        style={{ marginTop: 20, marginLeft: 10 }}
      >
        <EvilIcons
          name="chevron-left"
          size={35}
          color="white"
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            width: 40,
            height: 40,
            textAlign: "center",
            textAlignVertical: "center",
            marginLeft: 10,
            color: "black",
            fontWeight: "bold",
          }}
        />
      </Pressable>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerHeading}>Forgot Password</Text>
        <Text style={styles.topContainerText}>
          Please sign in to your existing account
        </Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={800}
        delay={100}
        easing="ease-out-cubic"
        style={styles.bottomContainer}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.bottomMainContainer}>
            {/* Email */}
            <View>
              <Text style={styles.loginHeadText}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                value={text}
                onChangeText={setText}
              />
            </View>

            <Button
              title="Send code"
              onPress={() => navigation.navigate("otpVerification")}
            />
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  topContainer: {
    flex: 1 / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainerHeading: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  topContainerText: {
    color: COLORS.white,
    marginTop: 10,
  },
  bottomContainer: {
    flex: 3 / 4,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  bottomMainContainer: {
    flex: 1,
  },
  loginHeadText: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: COLORS.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 20,
  },
  icon: {
    marginLeft: 10,
  },
  checkboxSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  rememberMe: {
    paddingLeft: 10,
    fontSize: 14,
    color: COLORS.textLight,
  },
  forgotPass: {
    color: COLORS.primary,
    fontWeight: "semibold",
  },

});
