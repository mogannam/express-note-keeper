const router = require('express').Router();
//const { filterByQuery, findById, createNewNote, validateAnimal } = require('../../lib/notes');
const { createNewNote } = require('../../lib/notes');
let { notes } = require('../../db/db.json');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid'); 

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be

    //todo: unique id 
    try {
        console.log(` is : ${__dirname}`)
        const data = notes //fs.readFileSync('../../db/db.json')
        console.log(` after file read notesRoutes.js line 14 : ${JSON.stringify(data)}`)
        console.log(`random id: ${uuidv4()}`)
        req.body.id =  uuidv4(); // notes.length.toString(); //
      
        // if (!validateAnimal(req.body)) {
        //   res.status(400).send('The animal is not properly formatted.');
        // } else {
          const note = createNewNote(req.body, data);
          res.json(note);
        // }


      } catch (err) {
        console.error(err)
      }


    
  });
  
  module.exports = router;


//   notes = fs.readFile('../db/db.json', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(`file read ${data} `)
//   })
// console.log(` after file read notesRoutes.js line 18 : ${notes}`)
// notes = JSON.parse(notes)
// console.log(`in notesRoutes.js line 13 , notes DB : ${notes}`)
// req.body.id = notes.length.toString();

// // if (!validateAnimal(req.body)) {
// //   res.status(400).send('The animal is not properly formatted.');
// // } else {
//   const note = createNewNote(req.body, notes);
//   res.json(note);
// // }