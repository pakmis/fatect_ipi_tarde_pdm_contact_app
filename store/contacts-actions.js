export const ADD_CONTACT = "ADD_CONTACT";
import * as FileSystem from "expo-file-system";

export const addContact = (contact) => {
  return async (dispatch) => {
    console.log(contact);
    const name = contact.imageURI.split("/").pop();
    const newPath = FileSystem.documentDirectory + name;

    try {
      await FileSystem.moveAsync({
        from: contact.imageURI,
        to: newPath,
      });
      const newContact = {
        ...contact,
        imageURI: newPath,
      };
      dispatch({type: ADD_CONTACT, contactDetails: {contact: newContact}});
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
