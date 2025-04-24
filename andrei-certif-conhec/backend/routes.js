const express = require("express");
const router = express.Router();

const MovieController = require("./controllers/MovieController");

router.get('/movies', MovieController.index);
router.get('/movies/:id', MovieController.show);
router.post('/movies', MovieController.store);
router.put('/movies/:id', MovieController.update);
router.delete('/movies/:id', MovieController.delete);

module.exports = router;
