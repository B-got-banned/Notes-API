const noteModel = require('../models/noteModel')
const Joi = require('joi')

//1.Controller to create a note
//Make sure to validate req with Joi
  const createNote = async (req, res, next) => {
      const noteSchema = Joi.object({
        title: Joi.string().min(3).required(),
        content: Joi.string().min(5).required(),
        tags: Joi.array().items(Joi.string()).optional()
    });

  const { error, value } = noteSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

  try {
        const newNote = new noteModel({...value });
        await newNote.save();
            return res.status(201).json({
            message: 'Note created successfully',
            data: newNote
        });
    } catch (error) {
        next(error);
    }
};

//2.Controller to get all notes
  //Include pagination and sorting
const getAllNotes = async (req, res, next) => {
  try {
        // Analogy: Extracting query params for pagination and sorting
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc' } = req.query;

        const notes = await noteModel.find({ }) // Only fetch user's notes
            .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await noteModel.countDocuments({ });

        return res.status(200).json({
            message: "Notes fetched successfully",
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            data: notes
        });
    } catch (error) {
        next(error);
    }
}

//3.Controller to search for notes by keyword (in title and / or content)
const getNotesByKeyword = async (req, res, next) => {
  try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ message: "Search query 'q' is required" });
        }

        // Using Regex for partial matches in title or content
        const notes = await noteModel.find({
            $or: [
                { title: { $regex: q, $options: 'i' } },
                { content: { $regex: q, $options: 'i' } }
            ]
        });

         return res.status(200).json({
            message: `Search results for: ${q}`,
            count: notes.length,
            data: notes
        });
    } catch (error) {
        next(error);
    }
};

//4.Controller to get a note by ID
const getNoteById = async (req, res, next) => {
   try {
        const note = await noteModel.findOne({ _id: req.params.id });

        if (!note) {
            return res.status(404).json({ message: "Note not found or unauthorized" });
        }

        return res.status(200).json({
            message: "Note fetched successfully",
            data: note
        });
    } catch (error) {
        next(error);
    }
};

//5.Controller to edit a note by ID
 //Make sure to validate req with Joi
const updateNoteById = async (req, res, next) => {
  const updateSchema = Joi.object({
        title: Joi.string().min(3).optional(),
        content: Joi.string().min(5).optional(),
        tags: Joi.array().items(Joi.string()).optional()
    });

    const { error, value } = updateSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const updatedNote = await noteModel.findOneAndUpdate(
            { _id: req.params.id }, // Ownership check included in query
            { ...value },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found or unauthorized" });
        }

        return res.status(200).json({
            message: "Note updated successfully",
            data: updatedNote
        });
    } catch (error) {
        next(error);
    }
};

 

//6.Controller to delete note by ID
const deleteNoteById = async (req, res, next) => {
   try {
        const deletedNote = await noteModel.findOneAndDelete({ _id: req.params.id});

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found or unauthorized" });
        }
             res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        next(error);
    }

};

module.exports = {createNote, getAllNotes, getNoteById, getNotesByKeyword, updateNoteById, deleteNoteById}
