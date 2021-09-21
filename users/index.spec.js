const request = require('supertest')
const app = require('../index')

describe('GET /', () => {
    it('Responds with "No user in the system"', (done) => {
        request(app).get('/').expect('Hello world!!!', done)
    })
})