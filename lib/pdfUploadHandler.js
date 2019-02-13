const multer = require('multer')
// CREATE ERROR CLASS
const FileUploadError = require('../errors/FileUploadError')

const multerUpload = multer({
    dest: './uploads'
}).single('pdfFile')

/**
 * Handles file upload and returns a promise with filename
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Promise}
 */
function handlePdfUpload(req, res) {
    return new Promise(function(resolve, reject) {
        multerUpload(req, res, function(err) {
            if(err) {
                return reject(new FileUploadError('Error occurred while handling file upload'))
            }
            resolve(req.file.filename)
        })
    })
}

module.exports = handlePdfUpload
