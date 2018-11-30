let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)


let store = new MongoStore({
  uri: 'mongodb://student:student1@ds028559.mlab.com:28559/top-dog', //USE YOUR OWN DB JERKS
  collection: "Sessions"
})

store.on('error', error => {
  console.error('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSSIONSECRET || "A secret now, only fire can tell",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})


module.exports = session