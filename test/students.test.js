const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case', function(t) {
    t.equal(1 + 1, 2)
    t.end()
})

test('GET /students', function(t) {
    request(app).get('/students')
        .expect(200) //status
        .then(function(res) { //end
            let students = res.body
            t.equal(2, students.length)

            let student = students[0]
            t.isNot(undefined, student.id)

            t.end()
        })
})