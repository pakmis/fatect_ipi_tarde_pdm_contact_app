import * as contactsActions from "./contacts-actions";
import Contact from "../models/contact";

const initialState = {
  contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contactsActions.ADD_CONTACT:
    console.log(action.contactDetails);
      const contact = new Contact(
        action.contactDetails.contact.id.toString(),
        action.contactDetails.contact.name,
        action.contactDetails.contact.number,
        action.contactDetails.contact.imageURI,
        action.contactDetails.contact.localization
      );
      return {
        contacts: state.contacts.concat(contact),
      };
    case contactsActions.LIST_CONTACTS:
      return {
        contacts: action.contacts.map(
          (l) => new Contact(l.id.toString(), l.name, l.number, l.imageUri, l.localization)
        ),
      };

    default:
      return state;
  }
};
