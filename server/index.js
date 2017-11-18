const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let students = [
    {id: 1, name: 'Suphakiat Kiatkanya', email: 'suphakiat@gmail.com'},
    {id: 2, name: 'Pawanee Seangoeng', email: 'pawanee@gmail.com'}
]

app.get('/students', function(req, res) {
    res.json(students)
})

app.get('/student/:id', function(req, res) {
    res.json(students[req.params.id - 1])
})

app.post('/students', function(req, res) {
    let student = req.body
    students.push(student)
    res.json(student)
})

module.exports = app