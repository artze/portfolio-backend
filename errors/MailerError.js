const ApplicationError = require('./ApplicationError')

class MailerError extends ApplicationError {
    constructor(message) {
        super(message)
    }
}

module.exports = MailerError