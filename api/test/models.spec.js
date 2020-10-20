const { conn, User } = require("../db");
const { expect } = require("chai");

describe("Model Tests", () => {
   before(() => conn.sync({ force: true }));
   
  after(() => conn.sync({force: true}));

  it("Create user", (done) => {
    User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
    }).then((result) => {
      expect(result.firstName).to.equal("John");
      done();
    });
  });

  it("Get all users", (done) => {
    User.findAll().then((result) => {
      expect(result.length).to.equal(1);
      done();
    });
  });
})

