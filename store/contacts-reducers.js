import * as contactsActions from "./contacts-actions";
import Contact from "../models/contact";

const initialState = {
  contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contactsActions.ADD_CONTACT:
      console.log(action.contactDetails.contact);
      const contact = new Contact(
        new Date().toString(),
        action.contactDetails.contact.name,
        action.contactDetails.contact.number,
        action.contactDetails.contact.imageURI
      );
      return {
        contacts: state.contacts.concat(contact),
      };
    default:
      return state;
  }
};
