const nodemailer = require('nodemailer')
const fs = require('fs')
// CREATE ERROR CLASSES
const MailerError = require('../errors/MailerError')

/**
 * Send an email with attachment. Sends file with given filename found in /uploads
 * @param {string} filename - filename of attachment
 * @returns {Promise}
 */
function sendWithAttachment(filename) {
    return new Promise(function(resolve, reject) {
        const smtpConfig = {
            host: 'smtp.sendgrid.net',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_APIKEY
            }
        }
        const transporter = nodemailer.createTransport(smtpConfig)
        const mailOptions = {
            from: 'no-reply@codingchallenge.com',
            to: process.env.EMAIL_ADD,
            subject: 'Image capture',
            html: '<h2>Image capture</h2>' + '<p>Your image capture pdf is attached.</p>',
            attachments: [{
                filename: 'ImageCapture.pdf',
                contentType: 'application/pdf',
                content: fs.createReadStream(`./uploads/${filename}`)
            }]
        }
        
        transporter.sendMail(mailOptions, function(err) {
            if(err) {
                return reject(new MailerError('Error occurred while sending email'))
            }
            resolve()
        })
    })
}

module.exports = {
    sendWithAttachment
}
