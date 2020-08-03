import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  //Firebase config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectfirebaseStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectfirebaseStore, timestamp };
