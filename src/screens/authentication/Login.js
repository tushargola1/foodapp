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
import Button from "../../component/Button";

export default function Login({ navigation }) {
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
        backgroundColor: COLORS.secondary, // Using the secondary color from theme
      }}
    >
      <Image
        source={require("../../../assets/eclipse.png")}
        style={styles.leftImage}
      />
      <View style={styles.topContainer}>
        <Text style={styles.topContainerHeading}>Log In</Text>
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

            {/* Password */}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.loginHeadText}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={secure}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                  <Icon
                    name={secure ? "eye-off" : "eye"}
                    size={24}
                    color="gray"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.checkboxSection}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={
                    isChecked ? COLORS.checkboxActive : COLORS.checkboxInactive
                  } // Using theme color
                />
                <Text style={styles.rememberMe}>Remember me</Text>
              </View>
              <Text
                style={styles.forgotPass}
                onPress={() => navigation.navigate("forgotpass")}
              >
                Forgot Password
              </Text>
            </View>

            <Button
              title=" LOG IN"
              onPress={() => navigation.navigate("forgotpass")}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 15,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: COLORS.textLight }}>
                Don't have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("register")}>
                <Text style={styles.forgotPass}>SIGN UP</Text>
              </Pressable>
            </View>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.textLight,
                fontWeight: "bold",
              }}
            >
              Or
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 30,
                marginTop: 20,
              }}
            >
              <Entypo name="facebook-with-circle" size={60} color="#395998" />
              <Entypo name="twitter-with-circle" size={60} color="#169CE8" />
              <Entypo name="google--with-circle" size={60} color="#1B1F2F" />
            </View>
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
