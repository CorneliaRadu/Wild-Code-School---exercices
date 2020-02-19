console.clear()

const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

function createValidationMiddleware (validator) {
    return function (request, response, next) {
        if (validator(request.body)) {
            next()
        } else {
            response.status(400).send()
        }
    }
}

function journalBodyValidator (journalBody) {
    if (!journalBody.title || typeof journalBody.title !== 'string') return false

    if (!journalBody.content || typeof journalBody.content !== 'string') return false

    return true
}

app.post(
    '/users/:userId/journals',

    createValidationMiddleware(journalBodyValidator),

    function (request, response) {
        console.log('validation passed')
        response.end()
    }
)

app.listen(
    port,
    () => { console.log('ready!') }
)
