console.clear()

const express = require('express')

const app = express()

const port = 3000

/*
 * function that creates a middleware, common pattern
 * in express, see 'morgan' on npm
 * 
 * works with the 'factory function' pattern
 */
function createCounterMiddleware () {
    /*
     * variable stays alive even after 'createCounterMiddleware'
     * function execution is over because the returned function
     * has a reference to it
     * 
     * this is called a closure
     */
    let counter = 0

    return function (request, response, next) {
        console.log(request.path, counter++)
    
        next()
    }
}

function endMiddleware (req, res) {
    res.end()
}

app.get(
    '/',
    createCounterMiddleware(),
    endMiddleware
)

app.get(
    '/count',
    createCounterMiddleware(),
    endMiddleware
)

app.get(
    '/datetime',
    (req, res) => {
        res.send(new Date().toString())
    }
)

app.listen(
    port,
    () => { console.log('ready!') }
)
