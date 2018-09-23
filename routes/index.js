const init = (app) => {
    app.get('/api', (req, res) => {
        res.status(200);
        res.end('API Endpoint says Hello!')
    })
}

module.exports = {
    init
}
