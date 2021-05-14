import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPreview from "./MapPreview";

const LocalizationCapture = (props) => {
  const [capturing, setCapturing] = useState(false);
  const [ localization, setLocalization ] = useState();

  const getPermissions = async () => {
    const result = await Location.requestPermissionsAsync()
    if (result.status !== "granted") {
      Alert.alert(
        "Sem permissão do GPS",
        "É preciso liberar o acesso ao mecanismo de localização",
        [{ text: "OK" }]
      );
      return false;
    } else {
      return true;
    }
  };

  const capture = async () => {
    const permission = await getPermissions();
    if (permission) {
      setCapturing(true);
      try {
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
        const loc = {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
        setLocalization(loc);
        props.onLocalizationCapture(loc);
        console.log('loc: ', loc);
      } catch (error) {
        Alert.alert(
          "Localização indiponivel",
          "Tente novamente mais tarde ou escolha uma no mapa",
          [{ text: "Ok" }]
        );
      }
      setCapturing(false);
    }
  };

  return (
    <View style={styles.capture}>
      <View style={styles.preview}>
      <MapPreview style={styles.preview} localization={localization}>
        {capturing ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text>Nenhuma localização disponível.</Text>
        )}
      </MapPreview>
      </View>
      <Button title="Obter localização" onPress={capture} />
    </View>
  );
};

export default LocalizationCapture;

const styles = StyleSheet.create({
  capture: {
    marginBottom: 15,
  },
  preview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#DDD",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
