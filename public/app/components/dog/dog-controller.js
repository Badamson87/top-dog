import DogService from "./dog-service.js"

let _ds = new DogService()
let _auth = {}
let user = {}


//draw all dogs
function drawDogs(dogs) {
  let template = ''
  dogs.forEach(dog => {
    template += `
    <div class="card" style="width: 18rem;">
    <h4 class="card-title">${dog.description.name}</h4>
    </div>
    `
  })
  document.getElementById('main-content').innerHTML = template
}
//draw one dog
function drawDogProfile(dogData) {
  document.getElementById('main-content').innerHTML = `
  <div class="container>
  <div class="row">
  <img href="${dogData.image}>
  <div class="row">
  <h3 class="col-12">Name:<span>${dogData.description.name}<h3>
  <h3 class="col-12">Breed:<span>${dogData.description.breed}<h3>
  <h3 class="col-12">Bio:<span>${dogData.description.bio}<h3>
  <h3 class="col-12">Owner:<span>${_auth.user.userName}<h3>
  </div>
  <div class="row">
  <div class="col-12" id="reviews">
  <h3>Reviews</h3>
  </div>
  </div>
  `
}


function _drawNewDogForm() {
  document.getElementById('main-content').innerHTML = `
  <div class="form-group">
  <form onsubmit="app.controllers.dogController.createNewDog(event)">
    <input type="text" name="bio" placeholder="Bio">
  <input type="number" name="age" placeholder="Age">
  <input type="text" name="breed" placeholder="Breed">
  <input type="text" name="name" placeholder="Name">
  <input type="text" name="category" placeholder="Good Boy or Dog Shame?">
  <button type="submit">Submit new dog</button>
  </form>
  </div>
    `
}

export default class DogController {
  constructor(auth) {
    _auth = auth

    console.log("dog controller")

    _ds.getdogs(drawDogs)
  }
  drawDogs(dogs) {
    drawDogs(dogs)
  }

  drawNewDogForm() {
    _drawNewDogForm()
  }
  //post a new dog
  createNewDog(event) {
    event.preventDefault();
    if (!_auth.user._id) {
      return console.log("Please Login to Continue")
    }
    let newDog = {
      description: {
        breed: event.target.breed.value,
        age: event.target.age.value,
        name: event.target.name.value,
        bio: event.target.bio.value
      },
      category: event.target.category.value

    }
    _ds.createNewDog(newDog, drawDogProfile)
  }


  // update a dog -post
  updateDog(event, dog) {
    if (!user._id) {
      console.log("Please Login to Continue")
    }
    if (user._id != dog._uid) {
      console.log("you can only update dogs that are yours")
    }
    event.preventDefault();
    let newData = {
      description: {
        breed: event.target.breed.value,
        age: event.target.age.value,
        name: event.target.name.value,
        bio: event.target.bio.value,
        img: event.target.image.value
      }

    }
    _ds.updateDog(newData, dogid)
  }



  // delete a dog
  deleteDog(dog) {
    if (!user) {
      console.log("Please Login to Continue")
    }
    if (user._id != dog._uid) {
      console.log("you can only delete dogs that are yours")
    }
    _ds.deleteDog(dog.id, drawUserProfile)
  }

  //upvote a dog
  upvotedog(dogid) {
    if (!user) {
      console.log("Please Login to Continue")
    }
    _ds.upvotedog(dogid)
  }
  downvoteDog(dogid) {
    if (!user) {
      console.log("Please Login to Continue")
    }
    _ds.downvoteDog(dogid)
  }


  // get top dog (the most points over all)

  getUserContent(uid) {
    let template = ''
    _ds.getdogs(uid).foreach(dog => {
      template += `
      <h4 onclick="app.controllers.dogController.drawDogProfile(dog.data)">${dog.data.description.name}<h4>
      `
    })
    document.getElementById('user-dogs').innerHTML = template
  }

}