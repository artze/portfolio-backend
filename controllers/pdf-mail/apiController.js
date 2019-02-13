const handlePdfUpload = require('../../lib/pdfUploadHandler');
const mailer = require('../../lib/mailer');
const del = require('del');

function handlePdfMail(req, res, next) {
    let filenameStore;
    handlePdfUpload(req, res)
        .then(function(filename) {
            filenameStore = filename;
            return mailer.sendWithAttachment(filename);
        })
        .then(function() {
            res.status(200).end();
            const deletedPaths = del.sync(`./uploads/${filenameStore}`);
            console.log(`Deleted file: \n ${deletedPaths.join('\n')}`);
        })
        .catch(function(err) {
            const deletedPaths = del.sync(`./uploads/${filenameStore}`);
            console.log(`Deleted file: \n ${deletedPaths.join('\n')}`);
            next(err);
        })
}

module.exports = {
    handlePdfMail
}
