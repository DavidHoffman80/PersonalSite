import contactReducer from './contactReducer';
import navReducer from './navReducer';
import loginReducer from './loginReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  nav: navReducer,
  contact: contactReducer,
  login: loginReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;