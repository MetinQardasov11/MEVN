import express from 'express';
import * as bookController from '../controllers/bookController.js'

const router = express.Router();

router
    .route('/').
    get(bookController.getAllBooks).
    post(bookController.createBook)


router
    .route('/:id')
    .get(bookController.getBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook)

export default router