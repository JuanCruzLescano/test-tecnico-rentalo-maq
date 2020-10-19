const {conn} = require('../db')
const request = require('supertest')
const {User} = require('../db')

describe('Models Tests', () => {
  beforeAll(() => conn.sync({force: true}))

  afterAll(() => {
    conn.sync({force: true})
  })
// ESTA ROTO!!!
  describe('Model User', () => {
    beforeEach(() => {
      const user = User.create({
        firstName: 'Juan',
        lastName: 'Lescano',
        email: 'juan@mail.com',
      })
      user.then(userCreated => user = userCreated)
    })
      test('It should create an User with firstName, lastName and email properties', done => {
        expect(user).toHaveProperty('firstName')
        expect(user).toHaveProperty('lastName')
        done()
      })
    })
  })

