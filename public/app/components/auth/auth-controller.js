import dogService from "../dog/dog-service.js";

let _authService = {}
let _dogService = new dogService()
let dogs = _dogService.dogs

//login
function drawUserLogin() {
  console.log('not logged in')
  document.getElementById('auth-content').innerHTML = `
  <form onsubmit="app.controllers.authController.login(event)">
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
    <button onclick="app.controllers.dogController.drawDogs(${dogs})" type="submit">Login</button>
    </form>
    <p onclick="app.controllers.authController.showRegister()">Click to Register</p>
  `
}

//register

function drawRegister() {
  console.log("not logged in")
  document.getElementById('auth-content').innerHTML = `
    <form onsubmit = "app.controllers.authController.register(event)">
    <input type="text" name="userName" placeholder="Username" required>
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
          <button type="submit" onclick="app.controllers.dogController.drawDogs(${dogs})">Register</button>
    </form>
        <p onclick="app.controllers.authController.showLogin()">Click to Login</p>
  `
}

//logout
function drawLogout() {
  document.getElementById('login-logout').innerHTML = `<button onclick="app.controllers.authController.logout()">Logout</button>`
}


export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
  }
  getdogs(draw) {
    _dogService.getdogs(draw)
  }

  login(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }

  register(event) {
    event.preventDefault();
    let creds = {
      userName: event.target.userName.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.register(creds, drawLogout)

  }

  logout() {
    _authService.logout(drawUserLogin)
  }

  showRegister() {
    drawRegister()
  }

  showLogin() {
    drawUserLogin()
  }







}