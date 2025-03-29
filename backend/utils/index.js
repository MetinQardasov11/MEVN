import mongoose, { Model, model } from "mongoose";

const isValidObjectId = (id, res) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Object id is not valid'
        })
    }
}

const findDocumentById = async (model, id, res) => {
    try {
        const document = await model.findById(id);
        if (!document) {
            res.status(404).json({
                error: `The ${model.modelName} not found`,
            })
            return null;
        }
        return document
    } catch (error) {
        console.log(`Erroring finding ${model.modelName} by ID`, error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}


const checkValidationErrors = (error, res) => {
    const validationErrors = {}
    for (let field in error.errors) {
        validationErrors[field] = error.errors[field].message
    }

    return res.status(400).json({
        message: 'Validation error',
        errors: validationErrors
    })
}

export { isValidObjectId, findDocumentById, checkValidationErrors }