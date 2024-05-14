const express = require('express');
const router = express.Router();
const {getContacts, createContact, getContact, updateContact,deleteContact} = require("../controllers/contactController");

//This is the multiple HTTP methods per route, as "/" have the same route so it's methods are packed into a single line, and "/:id" have the same route so same was done with them.

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;