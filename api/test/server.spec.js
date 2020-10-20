const request = require('supertest');
const { server, app } = require('../index');
const { expect } = require('chai');

describe("Routes Tests", () => {
  let agent;
  before(() => agent = request(app))

  it("Should return status 200", () => {
    return agent
     .get('/users')
     .then(result => {
	expect(result.statusCode).to.equal(200)
     })
 })
})
