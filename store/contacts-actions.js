export const ADD_CONTACT = "ADD_CONTACT";
export const LIST_CONTACTS = "LIST_CONTACTS";
import * as FileSystem from "expo-file-system";
import { insertContact, searchContacts } from "../helpers/db";

export const addContact = (contact) => {
  return async (dispatch) => {
    const name = contact.imageURI.split("/").pop();
    const newPath = FileSystem.documentDirectory + name;

    try {
      await FileSystem.moveAsync({
        from: contact.imageURI,
        to: newPath,
      });

      const resultadoDB = await insertContact(
        contact.name,
        contact.number,
        newPath,
        "Torre Eiffel",
        48.8584,
        2.2945
      );

      const newContact = {
        ...contact,
        id: resultadoDB.insertId,
        imageURI: newPath,
      };

      dispatch({ type: ADD_CONTACT, contactDetails: { contact: newContact } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const listContacts = () => {
  return async (dispatch) => {
    try {
      const resultadoDB = await searchContacts();
      dispatch({ type: LIST_CONTACTS, contacts: resultadoDB.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
