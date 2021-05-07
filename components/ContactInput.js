import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import ImagePicker from './ImagePicker';

const ContactInput = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [ imageURI, setImageURI ] = useState();

  return (
    <View style={styles.contactInputView}>
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

      <View style={styles.addContactButton}>
        <Button
          title="Add"
          onPress={() => {
            props.addContact(name, number, imageURI);
            setName("");
            setNumber("");
            setImageURI()
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactInputView: {
    alignItems: "center",
    marginBottom: 12,
  },
  addContactButton: {
    marginBottom: 1,
    width: "80%",
  },
  imagePicker: {
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
