let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Review"

let schema = new Schema({
  description: { type: String },
  dogId: { type: ObjectId, ref: "Product", required: true },
  //mongoose uses ref to know which table to search
  creatorId: { type: ObjectId, ref: "Dog", required: true } //look at this if broken, not sure about ObjectId
})

let model = mongoose.model(name, schema)

module.exports = model