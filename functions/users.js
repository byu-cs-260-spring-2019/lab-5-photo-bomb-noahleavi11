const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const router = express.Router();

var db = firebase.firestore();
var usersRef = db.collection('users');

router.get('/', async (req, res) => {
  try {
    console.log("i am in my router api");
    // let id = req.params.id.toString();
    // var user_information = usersRef.doc(id);
    // res.send(user_information);
    let querySnapshot = await usersRef.get();
    console.log("successfully got users");
    res.send(querySnapshot.docs.map(doc => doc.data()));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// router.post('/', async (req, res) => {
//   console.log(req.body.email);
//   console.log(req.body.word);
// 
//   let newUserRef = usersRef.doc(req.body.email);
//
//   let setWord = newUserRef.set({
//     word: req.body.word
//   });
//
//   res.send(setWord);
// });
//
// router.delete('/:id', async (req, res) => {
//   let id = req.params.id.toString();
//   var documentToDelete = ticketsRef.doc(id);
//   try{
//       var doc = await documentToDelete.get();
//       if(!doc.exists){
//           res.status(404).send("Sorry, that ticket doesn't exist");
//           return;
//       }
//       else{
//           documentToDelete.delete();
//           res.sendStatus(200);
//           return;
//       }
//   }catch(err){
//       res.status(500).send("Error deleting document: ",err);
//   }
// });

module.exports = router;
