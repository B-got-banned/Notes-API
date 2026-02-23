const noteModel = require('../models/noteModel')
const Joi = require('joi')

//Controller to create a note
const createNote = async (req, res, next) => {
  //Make sure to validate req with Joi
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
    category: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional()
  })
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
    const note = await noteModel.create(req.body)
    res.status(201).json(note)
  } catch (err) {
    next(err)
  }
}

//Controller to get all notes
const getAllNotes = async (req, res, next) => {
  //Include pagination and sorting
  const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc' } = req.query
  const skip = (page - 1) * limit
  const sortOrder = order === 'asc' ? 1 : -1

  try {
    const notes = await noteModel.find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit)
    res.status(200).json(notes)
  } catch (err) {
    next(err)
  }
}

//Controller to search for notes by keyword (in title and / or content)
const getNotesByKeyword = async (req, res, next) => {

}

//Controller to get a note by ID
const getNoteById = async (req, res, next) => {

}

//Controller to edit a note by ID
const updateNoteById = async (req, res, next) => {
  //Make sure to validate req with Joi

}

//Controller to delete note by ID
const deleteNoteById = async (req, res, next) => {

}


module.exports = { createNote, getAllNotes, getNoteById, getNotesByKeyword, updateNoteById, deleteNoteById }
