let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Dog"

let count = new Schema({
  user: { type: ObjectId, ref: 'User' },
  vote: { type: Number, default: 0 }
})

let schema = new Schema({
  creatorId: { type: ObjectId, ref: "User", required: true }, //look at this if broken, not sure about ObjectId
  counts: [count], 
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