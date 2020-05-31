const fs = require('fs');
const notes = [];

const addNotes = function (title, body) {

    const id = Math.random();
    const noteFilterDublicate = notes.filter(function(note) {
        return note.title === title;
    });

    if (noteFilterDublicate.length === 0) {
        notes.push({
            id, 
          title,
            body
        });
    } else {
        console.log("notes already exist!");
        
    }

    
    // create notes.json
    const createDataStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', createDataStr);

    loadtNotes();
}

const loadtNotes = function () {
    try{
        
        const dataBuffer = fs.readFileSync('notes.js'); // read file [ notes.json ]
        const dataStr = dataBuffer.toString(); // convert from buffer to strng
        const dataObject = JSON.parse(dataStr); // convert to object
        
        return dataObject;

    }catch (e) {
        return [];
    }
}

module.exports = {
    addNotes
}