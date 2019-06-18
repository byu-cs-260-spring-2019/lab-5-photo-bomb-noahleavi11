const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);
const app = express();

// const users = require("./users.js");
var db = firebase.firestore();
var usersRef = db.collection('users');

app.get('/api/users', async (req, res) => {
  let querySnapshot = await usersRef.get();
  console.log("successfully got users");
  res.send(querySnapshot.docs.map(doc => doc.data()));
})


app.post('/api/users', async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.word);

  let newUserRef = usersRef.doc(req.body.email);

  let setWord = newUserRef.set({
    word: req.body.word
  });

  res.send(setWord);
});
// app.use("/api/users", users);

exports.app = functions.https.onRequest(app);



// const functions = require('firebase-functions');
// const firebase = require('firebase-admin');
// const express = require('express');
//
// const firebaseApp = firebase.initializeApp(
//     functions.config().firebase
// );
//
// const app = express();
//
// var db = firebase.firestore();
// var usersRef = db.collection('users');
//
// app.get('/api/users/:id', async(req, res) => {
//     let user = req.params.id.toString();
//     console.log("here!!!");
//     console.log(user);
//     let this_user = await questionsRef.doc(user);
//     res.send(this_user);
// })
// exports.app = functions.https.onRequest(app);
