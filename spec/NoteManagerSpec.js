

console.log("adds a note to the notes list");
let noteManager = new NoteManager();
noteManager.addNote('This is the note message');
displayTests(checkEqual(noteManager.getNotes().length, 1));


