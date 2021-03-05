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

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contatos, setContatos] = useState([]);
  const [memoCount, setMemoCount] = useState(0);
  const numberPattern = /\d+/g;
  const namePattern = /^[A-Za-z]+([\ A-Za-z]+)*/;

  const handleAddContact = () => {
    if (name && number) {
      console.log('Name: ', name)
      console.log('Number: ', number)
      setContatos((contatos) => {
        setMemoCount((count) => count + 1);
        return [
          ...contatos,
          {
            key: memoCount.toString(),
            value: {
              name: name.match( namePattern ).join(''),
              number: number.match( numberPattern ).join(''),
            },
          },
        ];
      });
      setName("");
      setNumber("");
    } else {
      Alert.alert(
        "Aviso",
        "O campo nome ou numero está vazio",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.lembreteInputView}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.lembreteTextInput}
          placeholder="Digite um nome"
        />
        <TextInput
          value={number}
          keyboardType="numeric"
          onChangeText={(text) => setNumber(text)}
          style={styles.lembreteTextInput}
          placeholder="Digite um numero"
        />

        <View style={styles.memoButton}>
          <Button title="Add" onPress={handleAddContact} />
        </View>
        <View style={styles.memoButton}>
          <Button title="Clear" onPress={() => setContatos([])} />
        </View>
      </View>

      <View style={styles.memoList}>
        <FlatList
          data={contatos}
          renderItem={(contato) => (
            <View style={styles.itemNaLista}>
              <View key={contato.item.value}>
                <Text>Nome: {contato.item.value.name}</Text>
                <Text>Numero: {contato.item.value.number} </Text>
              </View>
            </View>
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
  lembreteInputView: {
    alignItems: "center",
    marginBottom: 12,
  },
  memoButton: {
    marginBottom: 1,
    width: "80%",
  },
  lembreteTextInput: {
    borderBottomColor: "#000000",
    width: "80%",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: "center",
  },
  memoList: {
    width: "80%",
    alignSelf: "center"
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: "#CCC",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
