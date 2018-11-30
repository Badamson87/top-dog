let _dogApi = axios.create({
  baseURL: "dogs",

})

let _dogs = []
let _topDog = {}
export default class dogService {
  constructor() {
    console.log("dog service")
  }
  //get all dogs
  getdogs() {
    _dogApi.get({})
      .then(res => {
        _dogs = res.data
        return _dogs
      })
      .catch(err => {
        console.error(err)
      })
  }

  //get one dog




  //get top dog
  getTopDog(draw) {
    _dogApi.get('topdog')
      .then(res => {
        _topDog = res.data
      })
      .catch(err => {
        console.error(err)
      })
    draw(_topDog)
  }



  //post a new dog



  //update a dog



  // delete a dog



  //upvote

  //downvote


  //get user content




}