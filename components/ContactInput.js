import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TextInput, Button } from "react-native";
import ImagePicker from "./ImagePicker";
import LocalizationCapture from "./LocalizationCapture";

const ContactInput = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [imageURI, setImageURI] = useState();

  return (
    <ScrollView style={styles.contactInputView}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.contactTextInput}
        placeholder="Digite um nome"
      />
      <TextInput
        value={number}
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        style={styles.contactTextInput}
        placeholder="Digite um numero"
      />

      <View style={styles.imagePicker}>
        <ImagePicker onImagePick={setImageURI} />
      </View>

      <View style={styles.localizationCapture}>
        <LocalizationCapture />
      </View>

      <View style={styles.addContactButton}>
        <Button
          title="Add"
          onPress={() => {
            props.addContact(name, number, imageURI);
            setName("");
            setNumber("");
            setImageURI();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contactInputView: {
    width: '100%'
  },
  addContactButton: {
    marginBottom: 1,
    width: "100%",
  },
  imagePicker: {
    marginBottom: 1,
    width: "100%",
  },
  localizationCapture: {
    marginBottom: 1,
    width: "100%",
  },
  contactTextInput: {
    borderBottomColor: "#000000",
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: "center",
  },
});

export default ContactInput;
