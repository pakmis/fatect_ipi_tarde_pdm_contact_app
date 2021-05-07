import React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { init } from './helpers/db';

import ContactsReducer from './store/contacts-reducers';
import ContactNavigator from "./navigations/ContactNavigator";

const rootReducer = combineReducers({
  contacts: ContactsReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

init().then(() => {
 console.log("Criação da base ocorreu com sucesso.");
}).catch((err) => {
 console.log('Criação da base falhou.');
 console.log(err);
});

export default function App() {
  return (
    <Provider store={store}>
      <ContactNavigator />
    </Provider>
  );
}
