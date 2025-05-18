import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../styles/Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LocationMap({ navigation }) {
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocation = async () => {
    try {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    } catch (error) {
      alert("Error getting location");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={[styles.circleContainer, location && styles.fullScreenMap]}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : location ? (
          <MapView
            style={StyleSheet.absoluteFill}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location}>
              <Image
                source={require("../../../assets/map-avatar.png")} // Use your custom icon here
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
        ) : null}
      </View>

      {!location && !loading && (
        <TouchableOpacity
          style={[styles.nextButton, { flexDirection: "row", justifyContent: "center" }]}
          onPress={handleLocation}
        >
          <Text style={styles.buttonText}>access Location</Text>
          <View style={styles.icon}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#000"
              style={styles.iconText}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    backgroundColor: "#98A8B8",
    width: "100%",
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenMap: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    width: 250,
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  icon: {
    backgroundColor: "white",
    padding: 5,
    opacity: 0.4,
    borderRadius: 20,
    marginLeft: 20,
  },
  iconText: {
    fontWeight: "bold",
  },
});
