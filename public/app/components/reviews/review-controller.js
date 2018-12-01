import ReviewService from "./review-service.js";
import DogService from '../dog/dog-service.js';

let _rs = new ReviewService()
let _ds = new DogService()
let _auth = {}
let dogObject = {}


function drawReviews(reviews) {
  console.log(reviews)
  let template = ''
  reviews.forEach(review => {
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

  getReviews(dogId) {
    _rs.getReviews(dogId, drawReviews)
  }

  // getReviews(event) {
  //   _rs.getreviews(event, getReview)

  // }
}
