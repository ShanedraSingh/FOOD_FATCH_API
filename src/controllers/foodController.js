const FoodModel = require('../models/FoodModel');

const foodController = {
  addFoodItem: async (req, res) => {
    try {
      const newFoodItem = new FoodModel(req.body);
      const savedFoodItem = await newFoodItem.save();
      res.status(201).json(savedFoodItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllFoodItems: async (req, res) => {
    try {
      const allFoodItems = await FoodModel.find();
      res.status(200).json(allFoodItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getFoodItemById: async (req, res) => {
    try {
      const foodItem = await FoodModel.findById(req.params.id);
      if (foodItem) {
        res.status(200).json(foodItem);
      } else {
        res.status(404).json({ message: 'Food item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateFoodItem: async (req, res) => {
    try {
      const updatedFoodItem = await FoodModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (updatedFoodItem) {
        res.status(200).json(updatedFoodItem);
      } else {
        res.status(404).json({ message: 'Food item not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteFoodItem: async (req, res) => {
    try {
      const deletedFoodItem = await FoodModel.findByIdAndDelete(req.params.id);
      if (deletedFoodItem) {
        res.status(200).json(deletedFoodItem);
      } else {
        res.status(404).json({ message: 'Food item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = foodController;
