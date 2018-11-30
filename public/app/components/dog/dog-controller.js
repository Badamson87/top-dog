import DogService from "./dog-service.js"

let _ds = new DogService()
let _auth = {}
let user = _auth._user

//draw User Profile
function drawUserProfile(user, fetchfunction) {
  if (!user) {
    console.log('please login to continue')
  }
  document.getElementById('main-content').innerHTML = `
  <div class="container">
  <div class="row">
  <img class="col-4" src="//placehold.it/200x200">
  <p class="col-8">${user.bio}</p>
  </div>
  <div class="row">
  <div class="col-12" id="user-dogs">
  </div>
  <div class="col-12" id="user-reviews"
  
  </div> 
  </div>
  </div>
  `
  fetchfunction(user._id)
}
//draw all dogs
function drawDogs(catagory) {
  let template = ''
  _ds.getdogs(catagory).foreach(dog => {
    template += `
    <div class="card" style="width: 18rem; background-image:url(${dog.description.image});">
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
  <h3 class="col-12>Name:<span>${dogData.name}<h3>
  <h3 class="col-12>Breed:<span>${dogData.breed}<h3>
  <h3 class="col-12>Bio:<span>${dogData.bio}<h3>
  <h3 class="col-12>Owner:<span>${dogData.uid}<h3>
  </div>
  <div class="row">
  <div class="col-12" id="reviews">
  <h3>Reviews</h3>
  </div>
  </div>
  `
}

//drawing the Home Page
function drawHomePage(topDog) {
  document.getElementById('main-content').innerHTML = `
  <div class='container'>
  <div class=" row">
  <div class="col-12">
  <img src="${topDog.description.img}">
  < div >
  <h2 class="col-12">${topDog.description.name}</h2>
  </div >
  </div >
  </div >
  <div class="row">
  <div class="col-12">
  <buttton onclick="app.controllers.dogController.drawDogs(goodBoys)" class="col-8">Good Boys</buttton>
  <img class="col-4" src="//placehold.it/200x200">
  </div>
        <div class="col-12">
        <buttton onclick="app.controllers.dogController.drawDogs(dogShame)" class="col-8">Shame Dog</buttton>
        <img class="col-4" src="//placehold.it/200x200">
        </div>
        </div>
        </div>
        `
}

export default class DogController {
  constructor(auth) {
    _auth = auth
    console.log("dog controller")
    this.getTopDog()
  }

  getTopDog() {
    _ds.getTopDog(drawHomePage)
  }

  //post a new dog
  createNewDog(event) {
    if (!user) {
      console.log("Please Login to Continue")
    }
    event.preventDefault();
    let newDog = {
      description: {
        breed: event.target.breed.value,
        age: event.target.age.value,
        name: event.target.name.value,
        bio: event.target.bio.value,
        img: event.target.image.value
      }
    }
    _ds.createNewDog(newDog, drawDogProfile)
  }

  // update a dog -post
  updateDog(event, dog) {
    if (!user) {
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