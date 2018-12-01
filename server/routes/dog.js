let router = require('express').Router()
let Dogs = require('../models/dog')
let Reviews = require('../models/review')

//GET
router.get('/', (req, res, next) => {
  Dogs.find({})
    .then(dogs => res.send(dogs))
    .catch(next)
})

//get dog by id
router.get('/:id', (req, res, next) => {
  Dogs.findById(req.params.id)
    .then(dog => res.send(dog))
    .catch(next)
})

//get dog and its reviews
router.get('/:id/reviews', (req, res, next) => {
  Dogs.findById(req.params.id)
    .then(dog => {
      Reviews.find({ productId: dog._id })
        .then(reviews => {
          return res.send({ dog, reviews })
        })
    })
    .catch(next)
})

//post/create a new dog
router.post('/', (req, res, next) => {
  Dogs.create(req.body)
    .then(dog => res.send(dog))
    .catch(next)
})

//delete a dog
router.delete('/:id', (req, res, next) => {
  Dogs.findOneAndDelete({ _id: req.params.id, creatorId: req.session.uid })
    .then(dog => res.send({ message: "DELORTED", data: dog }))
    .catch(next)
})

// get top dog
// router.get('/', (req, res, next) => {
//   Dogs.find({})  
//   .then(dogs => res.send(dogs))
//   .catch(next)
// })

//update/modify an existing dog
//the response should be just the description
router.put('/:id', (req, res, next) => {
  Dogs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dog => res.send(dog.description))
    .catch(next)
})

module.exports = router