const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  poster: { type: String },
});

module.exports = model("Movie", movieSchema);
