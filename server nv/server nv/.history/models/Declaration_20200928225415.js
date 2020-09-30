const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DéclarationSchema = new Schema({
  Titre: {
    type: String,
  },
  Description: {
    type: String,
  },
  Adresse: {
    type: String,
  },
  CordonnéesGPS: {
    type: String,
  },
  Service: {
    type: String,
    default: null,
  },
  approved: {
    type: Boolean,
    default: null,
  },
  addingDate: {
    type: Date,
  },
  modifyDate: {
    type: Date,
  },
  Priorité: {
    type: String,
  },
  État: {
    type: String,
    default: "your declaration will be treated soon",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: { type: String },
});

const Déclaration = mongoose.model("Déclaration", DéclarationSchema);

module.exports = Déclaration;
