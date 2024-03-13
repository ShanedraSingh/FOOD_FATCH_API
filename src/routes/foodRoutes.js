const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Routes
router.post('/add', foodController.addFoodItem);
router.get('/all', foodController.getAllFoodItems);
router.get('/:id', foodController.getFoodItemById);
router.put('/:id', foodController.updateFoodItem);
router.delete('/:id', foodController.deleteFoodItem);

module.exports = router;
