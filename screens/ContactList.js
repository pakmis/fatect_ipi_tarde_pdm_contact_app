import React, { useState, useEffect } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import ContactItem from "../components/ContactItem.js";
import Header from "../components/Header.js";
import * as contactsActions from '../store/contacts-actions';


const ContactList = (props) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsActions.listContacts());
  }, [dispatch]);

  return (
    <FlatList
      data={contacts}
      keyExtractor={(contact) => contact.id}
      renderItem={(contact) => (
        <ContactItem
          name={contact.item.name}
          number={contact.item.number}
          onSelect={() => {
            props.navigation.navigate("ContactDetails", {
              name: contact.item.name,
              id: contact.id,
            });
          }}
          image={contact.item.imageURI}
        />
      )}
    />
  );
};

ContactList.navigationOptions = (nav) => {
  return {
    headerTitle: "Contact List",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={Header}>
          <Item
            title="Add"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => nav.navigation.navigate("NewContact")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});

export default ContactList;
