const express = require('express');

const aiController = require("../controllers/ai.controller");

const router = express.Router(); // Corrected the variable name

router.get('/get-review', aiController.getReview );

module.exports = router;