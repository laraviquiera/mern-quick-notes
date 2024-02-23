const Note = require('../../models/note');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
};

async function create(req, res) {
  const { text } = req.body;
  const note = new Note({
    text,
    user: req.user._id
  });
  await note.save();
  res.json(note);
};