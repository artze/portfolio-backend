const ApplicationError = require('./ApplicationError')

class FileUploadError extends ApplicationError {
    constructor(message) {
        super(message)
    }
}

module.exports = FileUploadError