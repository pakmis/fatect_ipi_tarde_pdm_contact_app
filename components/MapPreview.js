import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MAP_API_KEY } from "../env";

const MapPreview = (props) => {
  const mapURL = `https://maps.googleapis.com/maps/api/staticmap?
  center=${props.localization?.lat},${props.localization?.lng}
  &zoom=14&size=400x200
  &maptype=roadmap
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284
  &key=${MAP_API_KEY}`;
  
  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.localization ? (
        <Image style={styles.image} source={{ uri: mapURL }} />
      ) : (
        props.children
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
