const fs = require('fs')
const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }

  function updateNote(notes) {  
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }

module.exports = {
  //filterByQuery,
  updateNote,
  createNewNote,
  //validateNote
};

//todo : validate