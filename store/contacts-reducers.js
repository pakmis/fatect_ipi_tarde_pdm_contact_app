import * as contactsActions from "./contacts-actions";
import Contact from "../models/contact";

const initialState = {
  contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contactsActions.ADD_CONTACT:
      const contact = new Contact(
        new Date().toString(),
        action.contactDetails.contact.name,
        action.contactDetails.contact.number,
        action.contactDetails.contact.imageURL
      );
      return {
        contacts: state.contacts.concat(contact),
      };
    default:
      return state;
  }
};
