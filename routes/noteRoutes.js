const express = require('express')
const router = express.Router()
const {createNote, getAllNotes, getNoteById, getNotesByKeyword, updateNoteById, deleteNoteById} = require('../controllers/noteControllers')

router.get('/welcome', (req, res) => {
  res.status(200).send("Welcome to Group 1's Note API! :D")
})


router.post('/', createNote)
router.get('/', getAllNotes)
router.get('/search', getNotesByKeyword)
router.get('/:id', getNoteById)
router.put('/:id', updateNoteById)
router.delete('/:id', deleteNoteById)

module.exports = router