const express = require('express')
const router = express.Router()
const {createNote, getAllNotes, getNoteById, getNotesByKeyword, updateNoteById, deleteNoteById} = require('../controllers/noteControllers')

router.get('/', (req, res) => {
  res.status(200).send("Welcome to Group 1's Note API! :D")
})

router.post('/notes', createNote)
router.get('/notes', getAllNotes)
router.get('/notes/search', getNotesByKeyword)
router.get('/notes/:id', getNoteById)
router.put('/notes/:id', updateNoteById)
router.delete('/notes/:id', deleteNoteById)

module.exports = router