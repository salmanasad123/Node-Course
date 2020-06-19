const fs = require("fs");
const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");
const { title } = require("process");

yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  desscribe: "Shows all notes",
  handler: function () {
    notes.listNotes();
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
