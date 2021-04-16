import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import ContactList from '../screens/ContactList';
import NewContact from '../screens/NewContact';
import ContactDetails from '../screens/ContactDetails';

const ContactNavigator = createStackNavigator({
  ContactList: ContactList,
  NewContact: NewContact,
  ContactDetails: ContactDetails,
});

export default createAppContainer(ContactNavigator);