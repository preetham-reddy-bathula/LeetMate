import { firebase } from './firebaseConfig';

const db = firebase.firestore();

export const addProblem = (userId, problemData) => {
  return db.collection('users').doc(userId).collection('problems').add(problemData);
};

export const fetchProblems = (userId) => {
  return db.collection('users').doc(userId).collection('problems').get();
};
