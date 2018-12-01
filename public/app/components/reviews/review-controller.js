import ReviewService from "./review-service.js";
import DogService from '../dog/dog-service.js';

let _rs = new ReviewService()
let _ds = new DogService()
let _auth = {}
let dogObject = {}


function drawReviews(dogdata, dogid) {
  document.getElementById('main-content').innerHTML = `
 <div class="container>
    <div class="row">
      <img onclick="app.controllers.reviewController.getReview(event)" href="${dogdata.image}>
    </div>
  <div class="row">
    <h3 class="col-12">Name:<span>${dogdata.description.name}<h3>
    <h3 class="col-12">Breed:<span>${dogdata.description.breed}<h3>
    <h3 class="col-12">Bio:<span>${dogdata.description.bio}<h3>
    <h3 class="col-12">Owner:<span>${_auth.user.userName}<h3>
  </div>
  <div id="reviews"> </div>
</div>
  `
  let template = ''
  _rs.getDogReviews(dogid).forEach(review => {
    template += `
      <div class="container">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Review by:${review.creatorId}</li>
            <li class="list-group-item">${review.description}</li>
          </ul>
        </div>
      </div>
    `
  })
  document.getElementById('reviews').innerHTML = template

}


export default class ReviewController {
  constructor(auth) {
    _auth = auth
    dogObject = _ds.dogs
  }


  createReview(event) {
    event.preventDefault();
    if (!_auth.user._id) {
      console.log("Please Login to post a review")
    }
    let newReview = {
      description: event.target.description.value,
      user: event.user._id,
      dogid: event.dogid
    }
    _rs.createReview(newReview)
  }

  editReview() {

  }
  drawReviews(dogdata, dogid) {
    drawReviews(dogdata, dogid)
  }

  deleteReview(reviewId, creatorId) {
    if (!_auth.user._id) {
      console.log('Please log in to continue')
    }
    if (_auth.user._id != creatorId) {
      console.log('You can only delete your reviews')
    }
    _rs.deleteReview(reviewId)
  }


  // //get reviews by id

  getReviews(dogObject, drawReviews) {
    _rs.getReviews(dogObject, drawReviews)
  }

  // getReviews(event) {
  //   _rs.getreviews(event, getReview)

  // }
}
