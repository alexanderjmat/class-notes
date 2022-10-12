const express = require('express')
const ExpressError = require("./expressError")
const userRoutes = require('./routes')
const middleware = require("./middleware")
const morgan = require("morgan")

const app = express();

app.use(express.json())

app.use(morgan('dev'))


app.use('/users', userRoutes)
app.use('/favicon.ico', (req, res) => res.sendStatus(204))



app.get('/private', middleware.checkForPassword, (req, res, next) => {
    return res.send("This is the realm of privacy.")
})
app.get('/secret', middleware.checkForPassword, (req, res, next) => {
    return res.send("Yo what is up guys this is Aj here.")
})

app

app.use(function (req, res) {
    return new ExpressError("Not Found", 404)
})

app.use(function (err, req, res, next) {
    let status = err.status || 500; 

    //set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    })
}) 


module.exports = app



