import React from 'react';
import { StyleSheet, View, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import ContactInput from '../components/ContactInput';
import * as contactsActions from '../store/contacts-actions'; 

const NewContact = ({navigation}) => {
  const dispatch = useDispatch()
  const numberPattern = /\d+/g;
  const namePattern = /^[A-Za-z]+([\ A-Za-z]+)*/;

  const handleAddContact = (name, number) => {
    if (name && number) {
      dispatch(contactsActions.addContact({
        name: name.match(namePattern).join(""),
        number: number.match(numberPattern).join(""),
      }))
      navigation.goBack();
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

  return (
    <View style={styles.container}>
      <ContactInput
        addContact={handleAddContact}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
});

export default NewContact