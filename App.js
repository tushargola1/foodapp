import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Pressable, View, Text, StyleSheet, Image, Alert } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import SplashScreen from "./src/screens/splashscreen/SplashScreen";
import Demoo from "./src/screens/splashscreen/Demoo";
import Onboarding from "./src/screens/splashscreen/Onboarding";
import Login from "./src/screens/authentication/Login";
import ForgotPass from "./src/screens/authentication/ForgotPass";
import OtpVerification from "./src/screens/authentication/OtpVerification";
import SignUp from "./src/screens/authentication/SignUp";
import LocationMap from "./src/screens/map/LocationMap";
import Home from "./src/screens/pages/Home";
import { COLORS, foodData } from "./src/styles/Theme";
import Search from "./src/screens/pages/Search";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RestaurantView from "./src/screens/pages/RestaurantView";
const Drawer = createDrawerNavigator();

// ✅ Custom Drawer Content
const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("./assets/user.png")}
          style={styles.profileImage}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>John Smith</Text>
          <Text style={styles.role}>Developer</Text>
        </View>
      </View>

      {/* Drawer items */}
      <View style={styles.menuContainer}>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("home")}
        >
          <Ionicons
            name="home-outline"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.menuText}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("profile")}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.menuText}>Profile</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default function App() {
  const [value, setValue] = useState(null);
  const dropdownData = foodData.map((item) => ({
    label: item.keywords[0],
    value: item.id,
  }));

  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        initialRouteName="restaurant"
      >
        <Drawer.Screen
          name="home"
          component={Home}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.openDrawer()}>
                <Ionicons
                  name="menu"
                  size={25}
                  color="black"
                  style={styles.iconStyle}
                />
              </Pressable>
            ),
            // headerTitle: () => (
            //   <View style={{ marginLeft: 15 }}>
            //     <Text
            //       style={{
            //         color: COLORS.primary,
            //         fontWeight: "bold",
            //         textTransform: "uppercase",
            //         fontSize: 12,
            //       }}
            //     >
            //       Deliver to
            //     </Text>
            //     <View style={{ flexDirection: "row", alignItems: "center" }}>
            //       <Text>Halal Lab office</Text>
            //       <Ionicons
            //         name="chevron-down"
            //         size={15}
            //         color="black"
            //         style={{ fontWeight: "bold", marginLeft: 5 }}
            //       />
            //     </View>
            //   </View>
            // ),
            headerRight: () => (
              <Pressable style={{ marginRight: 20 }}>
                <View style={{ position: "relative" }}>
                  <Ionicons
                    name="bag-handle-outline"
                    size={25}
                    color="white"
                    style={{
                      backgroundColor: "black",
                      borderRadius: 20,
                      width: 40,
                      height: 40,
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: -2,
                      top: -4,
                      backgroundColor: COLORS.primary,
                      borderRadius: 10,
                      width: 20,
                      height: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </Text>
                  </View>
                </View>
              </Pressable>
            ),
          })}
        />
        <Drawer.Screen
          name="search"
          component={Search}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate("home")}>
                <Ionicons
                  name="chevron-back"
                  size={22}
                  color="black"
                  style={styles.iconStyle}
                />
              </Pressable>
            ),
            headerTitle: () => (
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontSize: 17,
                  }}
                >
                  Search
                </Text>
              </View>
            ),
            headerRight: () => (
              <Pressable style={{ marginRight: 20 }}>
                <View style={{ position: "relative" }}>
                  <Ionicons
                    name="bag-handle-outline"
                    size={25}
                    color="white"
                    style={{
                      backgroundColor: "black",
                      borderRadius: 20,
                      width: 40,
                      height: 40,
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: -2,
                      top: -4,
                      backgroundColor: COLORS.primary,
                      borderRadius: 10,
                      width: 20,
                      height: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </Text>
                  </View>
                </View>
              </Pressable>
            ),
          })}
        />
        {/* <Drawer.Screen
            name="restaurant"
            component={RestaurantView}
            options={({ navigation }) => ({
              headerLeft: () => (
                <Pressable onPress={() => navigation.navigate("search")}>
                  <Ionicons
                    name="chevron-back"
                    size={22}
                    color="black"
                    style={styles.iconStyle}
                  />
                </Pressable>
              ),
              headerTitle: () =>(
                <View style={{ marginLeft:10 }}>
                  <Text style={{ fontSize:16, fontWeight:"500" }}>
                    Restaurant View
                  </Text>
                </View>
              ),
           
            })}
          /> */}
        <Drawer.Screen
          name="restaurant"
          component={RestaurantView}
          options={{
            headerShown: false, // hide the default drawer header
          }}
        />

        <Drawer.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="demoo"
          component={Demoo}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="forgotpass"
          component={ForgotPass}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="otpVerification"
          component={OtpVerification}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="register"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="map"
          component={LocationMap}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

// Styles
const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: "#ECF0F4",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 20,
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  header: {
    // backgroundColor: "#FDD835",
    alignItems: "center",
    flexDirection: "row",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  role: {
    color: "#555",
    fontSize: 14,
  },
  menuContainer: {
    // padding: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
  keyword: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
    textTransform: "capitalize",
    fontSize: 15,
    borderColor: "#EDEDED",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginLeft: 20,
    width: "58%",
    fontWeight: "bold",
  },
});
