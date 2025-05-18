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
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Checkbox from "expo-checkbox";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../styles/Theme";
import Button from "../../component/Button";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUp({ navigation }) {
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
        <Text style={styles.topContainerHeading}>Sign Up</Text>
        <Text style={styles.topContainerText}>
          Please sign up to get started
        </Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={800}
        delay={100}
        easing="ease-out-cubic"
        style={styles.bottomContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomMainContainer}>
              {/* Email */}
              <View>
                <Text style={styles.loginHeadText}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="John doe"
                  value={text}
                  onChangeText={setText}
                />
              </View>

              <View style={{ marginTop: 20 }}>
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
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginHeadText}>Re-type Password</Text>
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

              <Button
                title="Sign up"
                onPress={() => navigation.navigate("map")}
              />
            </View>
          </View>
        </ScrollView>
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
