let express = require('express')
let bodyParser = require('body-parser')
require('./server/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 //FOR DEPLOYMENT

server.use(express.static(__dirname + '/public'))
<<<<<<< HEAD


=======
>>>>>>> 22bddf1f85589254cc9446980b8332e7081e4c50
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

let auth = require('./server/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)

//Allow users to get data when not logged in
server.use("*", (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  if (req.method == "POST") {
    req.body.creatorId = req.session.uid
  }
  next()
})
//^^ above always the same

let dogRoutes = require('./server/routes/dog')
let reviewRoutes = require('./server/routes/review')

server.use('/dogs', dogRoutes)
server.use('/reviews', reviewRoutes)




//default error handler
server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})

server.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})