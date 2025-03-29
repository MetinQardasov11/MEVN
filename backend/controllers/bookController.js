import mongoose from "mongoose";
import Book from "../models/book.js"
import { isValidObjectId, findDocumentById, checkValidationErrors} from "../utils/index.js";

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            data: books
        })
    } catch (error) {
        console.log('Erroring getting books', error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const getBook = async (req, res) => {
    const { id } = req.params;

    if (isValidObjectId(id, res)) return;

    try {
        const book = await findDocumentById(Book, id, res);
        if (!book) return;
        return res.status(200).json({
            data: book
        })

    } catch (error) {
        console.log('Erroring getting one book', error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const createBook = async (req, res) => {

    try {
        const { title, author } = req.body;
        const existingBook = await Book.findOne({ title, author });
        if (existingBook) {
            return res.status(400).json({
                message: 'Book already exists'
            })
        }
        const newBook = await Book.create(req.body);
        return res.status(201).json({
            message: 'Book created successfully',
            data: newBook
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            if (checkValidationErrors(error, res)) return;
        } else {
            console.log('Erroring creating book', error)
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, description, pageNumber, rating } = req.body;

    if (isValidObjectId(id, res)) return;

    try {
        const book = await findDocumentById(Book, id, res);
        if (!book) return;

        book.title = title || book.title;
        book.author = author || book.author;
        book.description = description || book.description;
        book.pageNumber = pageNumber || book.pageNumber;
        book.rating = rating || book.rating;
        await book.save();
        return res.status(200).json({
            message: 'Book updated successfully',
        })
    } catch (error) {
        console.log('Erroring updating book', error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }

}

const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (isValidObjectId(id, res)) return;

    try {
        const book = await findDocumentById(Book, id, res);
        if (!book) return;
        await book.deleteOne();
        return res.status(200).json({
            message: 'Book deleted successfully'
        })
    } catch (error) {
        console.log('Erroring deleting book', error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export { getAllBooks, createBook, getBook, updateBook, deleteBook }