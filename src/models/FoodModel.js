const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foodItemName: { type: String, required: true },
  foodGroup: String,
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      proteins: Number,
      fats: Number,
      carbohydrates: Number,
      saturatedFats: Number,
      unsaturatedFats: Number,
      transFats: Number,
      sugar: Number,
    },
    micronutrients: {
      vitamins: {
        A: Number,
        C: Number,
        D: Number,
      },
      minerals: {
        iron: Number,
        calcium: Number,
        potassium: Number,
      },
      // Add other micronutrients as needed
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

const FoodModel = mongoose.model('Food', foodSchema);

module.exports = FoodModel;
