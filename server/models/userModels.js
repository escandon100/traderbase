import mongoose from "mongoose";

const traderbasesInputSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  country: String,
});

const TraderbasesInput = mongoose.model("traderbasesInput", traderbasesInputSchema);

export default TraderbasesInput;
