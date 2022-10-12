process.env.NODE_ENV = "test"
const request = require("supertest")
const app = require("./app")
const { captureStackTrace } = require("./expressError")

let users = [{id: 1, username: "ajpiano"}, {id: 2, username: "functor123"}, {id: 3, username: "wtflask"}]

beforeEach(function() {
    
})