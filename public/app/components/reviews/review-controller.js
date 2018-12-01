import ReviewService from "./review-service.js";

let _rs = new ReviewService()
let _auth = {}

function getReviews(rev) {
  document.getElementById('main-content').innerHTML = `
      <div class="container">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Review by:${rev.creatorId}</li>
            <li class="list-group-item">${rev.description}</li>
          </ul>
        </div>
      </div>
    `
}

function deleteReview(event) {
  if (!user) {
    console.log('Please log in to continue')
  }
  if (user._id != dog._uid) {
    console.log('You can only delete your reviews')
  }
  _rs.deleteReview(review)
}

export default class ReviewController {
  constructor(auth) {
    _auth = auth
  }


  createReview(event) {
    if (!user) {
      console.log("Please Login to post a review")
    }
    event.preventDefault();
    let newReview = {
      description: event.target.description.value,
      user: event.user._id,
      dogid: event.dogid
    }
    _rs.createReview(newReview)
  }

  editReview() {

  }

  deleteReview(review) {
    if (!user) {
      console.log('please login to Continue')
    }
    if (user._id != review._id {
      console.log('you can only delete your own reviews')
    }
    _rs.deleteReview(review.id, xxxxx ?   )

  }

  //get reviews by id

  getReviews(event) {

  }
}
