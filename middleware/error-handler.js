const {CustomError} = require('../errors/custom-error')
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({msg: err.message})
    }
    return res.status(500).json({msg: 'something went wrong'})
}

module.exports = errorHandler;