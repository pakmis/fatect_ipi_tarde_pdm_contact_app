import React from "react";

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const ContactItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.contactItem}
    >
    
    <Image
        style={styles.imagem}
        source={{uri: props.imagem}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Nome: {props.name}</Text>
        <Text style={styles.number}>Numero: {props.number} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center"
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#CCC",
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 24,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    color: "#777",
    fontSize: 16
  },  
  number: {
    color: 'black',
    fontSize: 18,
    marginBottom: 4
  },
});

export default ContactItem;
