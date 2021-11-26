const router = require('express').Router();
//const { filterByQuery, findById, createNewNote, validateAnimal } = require('../../lib/notes');
const { createNewNote, updateNote} = require('../../lib/notes');
let { notes } = require('../../db/db.json');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid'); 

router.get('/notes', (req, res) => {
  try {
      
    const data = notes 
    //console.log(` in routes/apiROutes/noteRoutes.js:get/notes \n\t ${JSON.stringify(notes)}`)
    return res.json(notes);

    } catch (err) {
      console.error(err)
    }

});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    
    //todo: unique id 
    try {
        
        const data = notes //fs.readFileSync('../../db/db.json')
        
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

  router.post('/saveNote', (req, res) => {
    // set id based on what the next index of the array will be
    //console.log (`** id is ${JSON.stringify(req.body.id)}`)
    //todo: unique id 
    const newNote = req.body
    let oldNote = {};

    try {
      let counter = 0;
      notes.forEach(element => {
        if(newNote.id === element.id)
          notes[counter]=newNote
        counter++;
        
      });
        
        const data = notes //fs.readFileSync('../../db/db.json')
        
        notes = updateNote(notes);
        res.json(notes);


      } catch (err) {
        console.error(err)
      }


    
  });
  
  module.exports = router;

