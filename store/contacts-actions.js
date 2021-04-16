export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    contactDetails: { contact: contact }
  }
}