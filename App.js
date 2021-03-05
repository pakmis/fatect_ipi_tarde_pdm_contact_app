import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from "react-native";
import ContactInput from "./components/ContactInput";
import ContactItem from "./components/ContactItem";

export default function App() {
  const [contatos, setContactList] = useState([]);
  const [contactCount, setMemoCount] = useState(0);
  const numberPattern = /\d+/g;
  const namePattern = /^[A-Za-z]+([\ A-Za-z]+)*/;

  const handleAddContact = (name, number) => {
    if (name && number) {
      console.log("Name: ", name);
      console.log("Number: ", number);
      setContactList((contatos) => {
        setMemoCount((count) => count + 1);
        return [
          ...contatos,
          {
            key: contactCount.toString(),
            value: {
              name: name.match(namePattern).join(""),
              number: number.match(numberPattern).join(""),
            },
          },
        ];
      });
    } else {
      Alert.alert(
        "Aviso",
        "O campo nome ou numero está vazio",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };

  const handleRemoveContact = (key) => {
    setContactList((contactList) => {
      return contactList.filter(contact => {
        return contact.key !== key
      })
    })
  }

  return (
    <View style={styles.container}>
      <ContactInput
        addContact={handleAddContact}
        clearList={() => setContactList([])}
      />
      <View style={styles.contactList}>
        <FlatList
          data={contatos}
          renderItem={(contact) => (
            <ContactItem
              name={contact.item.value.name}
              number={contact.item.value.number}
              contactKey={contact.item.key}
              onDelete={handleRemoveContact}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  contactList: {
    width: "80%",
    alignSelf: "center"
  },
});
