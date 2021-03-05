import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ContactInput = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.contactInputView}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.ContactTextInput}
        placeholder="Digite um nome"
      />
      <TextInput
        value={number}
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        style={styles.ContactTextInput}
        placeholder="Digite um numero"
      />

      <View style={styles.addContactButton}>
        <Button
          title="Add"
          onPress={() => {
            props.addContact(name, number);
            setName("");
            setNumber("");
          }}
        />
      </View>

      <View style={styles.addContactButton}>
        <Button title="Clear" onPress={() => props.clearList()} />
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
  ContactTextInput: {
    borderBottomColor: "#000000",
    width: "80%",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: "center",
  },
});

export default ContactInput;
