function errorHandler(err, req, res, next) {
    console.log(err)
    switch(err.name) {
        
        case 'FileUploadError':
            res.status(500).json({
                error: err.name,
                errorMessage: err.message
            })
            break
        
        case 'MailerError':
            res.status(502).json({
                error: err.name,
                errorMessage: err.message
            })
            break
        
        case 'ResourceNotFoundError':
            res.status(404).json({
                error: err.name,
                errorMessage: err.message
            })
            break

        default:
            res.status(500).end()
    }
}

module.exports = errorHandler
