let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Dog"

let schema = new Schema({
  creatorId: { type: ObjectId, ref: "User", required: true }, //look at this if broken, not sure about ObjectId
  count: { type: Number, default: 0, required: true }, 
  description: {
    breed: { type: String, required: true, default: "Mutt" },
    age: { type: Number }, 
    name: { type: String, required: true },
    bio: {type: String, required: true}
  },
  category: {type:String, required: true}
})

let model = mongoose.model(name, schema)

module.exports = model