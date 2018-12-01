let _reviewApi = axios.create({
  baseURL: 'reviews',
})

let _reviews = []


export default class reviewsService {
  constructor() {
  }
  getDogReviews(dogid) {
    _reviewApi(dogid)
      .then(res => {
        return _reviews = res.data
      })
      .catch(err => {
        console.error(err)
      })
  }
  //get all reviews
  getReviews(dogId, drawReviews) {
    _reviewApi.get(dogId)
      .then(res => {
        _reviews = res.data
        drawReviews(_reviews)
      })
      .catch(err => {
        console.error(err)
      })
  }
  get _reviews() {
    return _reviews
  }


  createReview(newReview, draw) {
    _reviewApi.post('/', newReview)
      .then(res => {
        _reviews.push(res.data)
        draw(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  postReview(dogId, review, cb) {
    let payLoad = {
      dogId,
      description: review
    }
    _reviewApi.post("/", payLoad)
      .then(res => {
        _reviews.push(res.data)
        cb(_reviews)
      })
  }



  deleteReview(reviewId) {
    _reviewApi.delete(reviewId)
      .then(res => {
        console.log('successfully deleted')
      })
      .catch(err => {
        console.error(err)
      })
  }


}