function delay () {}

const delayPromise = delay(500)

const callback = function () { console.log('second') }

delayPromise.then(callback)

console.log('first')
