import React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import ContactsReducer from './store/contacts-reducers';
import ContactNavigator from "./navigations/ContactNavigator";

const rootReducer = combineReducers({
  contacts: ContactsReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ContactNavigator />
    </Provider>
  );
}
