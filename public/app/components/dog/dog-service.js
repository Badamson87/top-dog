let _dogApi = axios.create({
  baseURL: "/dogs",

})

let _dogs = []
export default class dogService {
  constructor() {
    console.log("dog service")

  }
  //get all dogs
  getdogs(draw) {
    _dogApi.get('/')
      .then(res => {
        _dogs = res.data
        draw(_dogs)
      })
      .catch(err => {
        console.error(err)
      })
  }
  get dogs() {
    return _dogs
  }
  //get one dog




  //get top dog
  getTopDog(draw) {
    _dogApi.get('/')
      .then(res => {
        this.doMath(res.data, draw)
      })
      .catch(err => {
        console.error(err)
      })
  }

  doMath(data, draw) {
    let highestDog = { votes: -1 }
    for (let i = 0; i < data.length; i++) {
      const dog = data[i];
      let dogvalue = 0
      for (let voter in dog.votes) {
        dogvalue += dog.votes[voter]
      }
      // for (let i = 0; i < Object.keys( dog.votes).length; i++) {
      //   const vote = dog.votes[i];
      //   dogvalue += vote.value
      // }
      if (dogvalue > highestDog.votes) {
        highestDog = dog
      }

    }
    draw(highestDog)

  }

  //post a new dog
  createNewDog(newDog, draw) {
    _dogApi.post('/', newDog)
      .then(res => {
        _dogs.push(res.data)
        debugger
        draw(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }


  //update a dog
  updateDog(newData, dogid) {

  }


  // delete a dog
  
  destroyDog(_id, draw) {
    debugger
    _dogApi.delete(_id)
      .then(res => {
      this.getdogs(draw)
      }) 
      .catch(err => {
        console.error(err)
      })
 }


  //upvote
  upvoteDog(dogid) {

  }
  //downvote
  downvoteDog(dogid) {

  }

  //get user content




}