import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.contactKey)}>
      <View style={styles.contactItem}>
        <View key={props.contactKey}>
          <Text>Nome: {props.name}</Text>
          <Text>Numero: {props.number} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    padding: 12,
    backgroundColor: "#CCC",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default ContactItem;
