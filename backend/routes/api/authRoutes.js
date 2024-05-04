const express = require("express")
const _ = express.Router()
const secureApi = require("../../middleware/secureApi")
const registrationController = require("../../controllers/registrationController")

_.post("/registration", secureApi, registrationController)

module.exports = _