const { syncDbSeed } = require('../index')
const { expect } = require('chai')


describe('Model Tests', () => {
  let seed;
  beforeEach( async () => seed = syncDbSeed());
  describe('User model', () => {
    it('John, Maria and Jose have a first name', (done) => {
      expect(seed.users.John.firstName).to.equal('John')
      expect(seed.users.Maria.firstName).to.equal('Maria')
      expect(seed.users.Jose.firstName).to.equal('Jose')
      done();
    })
  })
})
