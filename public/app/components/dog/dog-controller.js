import DogService from "./dog-service.js"

let _ds = new DogService()
let _auth = {}


//draw all dogs
function drawDogs() {
  let template = ''
  _ds.getdogs.foreach(dog => {
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

export default class DogController {
  constructor(auth) {
    _auth = auth
    console.log("dog controller")
  }






  //post a new dog

  // update a dog -post
  // img
  //bio
  //age


  // delete a dog


  //upvote a dog

  // top dog shame

  //top good boy(dayweek?)


  // top dog (the most points over all)







}