const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "your notes....";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    if (note.title === title) {
      return true;
    } else {
      return false;
    }
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    if (note.title !== title) {
      return true;
    } else {
      return false;
    }
  });

  if (notes.length === notesToKeep.length) {
    console.log(chalk.default.red.inverse("No note found"));
  } else {
    console.log(chalk.default.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(notes);
  } else {
    console.log(chalk.default.red.inverse("No notes to show"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find(function (note) {
    return note.title === title;
  });
  if (note) {
    console.log(note);
  } else {
    console.log(chalk.default.red.inverse("No note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
