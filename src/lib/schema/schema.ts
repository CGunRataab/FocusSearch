import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  gender: { type: String },
  name: {
    type: { title: String, first: String, last: String },
    required: true,
  },
  username: { type: String },
  location: { type: Object, required: true },
  email: { type: String, required: true },
  dob: { type: Object, required: true },
  registered: { type: Object },
  picture: { type: Object },
});
const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default ItemModel;
