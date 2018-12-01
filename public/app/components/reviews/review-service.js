let _reviewApi = axios.create({
  baseURL: 'reviews',
})

let _reviews = []


export default class reviewsService {
  constructor() {
    console.log('dog service')
  }
//get all reviews
  getreviews(draw) {
    _reviewApi.get('/')
      .then(res => {
        _reviews = res.data
        draw(_reviews)
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

  deleteReview(review) {
    _reviewApi.delete(review.id)
      .then(res => {
      
      })
      .catch(err => {
        console.error(err)
    })
  }


}