const express = require('express');
const router = express.Router();
const ConcoursController = require('../controllers/ConcoursController');



router.route('/')
    .get(ConcoursController.getAll)

    router.route('/:id')
    .get(ConcoursController.getById)
    .put(ConcoursController.correct)



module.exports = router;