import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import * as ImagePick from 'expo-image-picker';

const ImagePicker = (props) => {
  const [ imageURI, setImageURI ] = useState();

  const pickImage = async () => {
    const result = await ImagePick.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    })

    setImageURI(result.uri);
    props.onImagePick(result.uri);
  };

  return (
    <View style={styles.main}>
      <View style={styles.previewImage}>
        {!imageURI ? (
          <Text>Nenhuma foto</Text>
        ) : (
          <Image source={{ uri: imageURI }} style={styles.image} />
        )}
      </View>

      <Button title="Selecionar foto" onPress={pickImage} />
    </View>
  );
}

export default ImagePicker

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginBottom: 16,
  },
  previewImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderColor: "#CCC",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})
