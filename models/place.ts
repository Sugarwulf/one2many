import mongoose = require ('mongoose');


let placeSchema = new mongoose.Schema({
  name: String,
  address: String
});

export default mongoose.model('Place', placeSchema);
