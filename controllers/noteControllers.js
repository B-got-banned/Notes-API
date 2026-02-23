const noteModel = require('../models/noteModel')
const Joi = require('joi')

//Controller to create a note
const createNote = async (req, res, next) => {
  //Make sure to validate req with Joi

}

//Controller to get all notes
const getAllNotes = async (req, res, next) => {
  //Include pagination and sorting


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


module.exports = {createNote, getAllNotes, getNoteById, getNotesByKeyword, updateNoteById, deleteNoteById}
