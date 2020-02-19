const express = require('express')

const app = express()

app.use(express.json())

const items = [
    { name: 'foo', id: 1 },
    { name: 'bar', id: 2 },
    { name: 'baz', id: 3 }
]

app.get(
    '/items',
    function (req, res) {
        res.json(items)
    }
)

app.get(
    '/items/:id',
    function (req, res) {
        const { id } = req.params

        const item = items.find(
            item => item.id === Number(id)
        )

        if (!item) {
            res.status(404).end()
        } else {
            res.json(item)
        }
    }
)

app.post(
    '/items',
    function (req, res) {
        const nextId = 1 + Math.max(...items.map(item => item.id))

        items.push({
            ...req.body,
            id: nextId
        })

        res.status(201).end()
    }
)

app.put(
    '/items/:id',
    function (req, res) {
        const { id } = req.params

        const index = items.findIndex(
            item => item.id === Number(id)
        )

        items[index] = {
            ...items[index],
            ...req.body
        }

        res.status(200).end()
    }
)

app.delete(
    '/items/:id',
    function (req, res) {
        const { id } = req.params

        const index = items.findIndex(
            item => item.id === Number(id)
        )

        items.splice(index, 1)

        res.status(204).end()
    }
)

app.listen(3000)
