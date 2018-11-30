
let _authService = {}


//login
function drawUserLogin() {
  console.log('not logged in')
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.login(event)">
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
    <button type="submit">Login</button>
    </form>
    <p onclick="app.controllers.authController.showRegister()">Click to Register</p>
  `
}

//register

function drawRegister() {
  console.log("logged in")
  document.getElementById('auth').innerHTML = `
    <form onsubmit = "app.controllers.authController.register(event)">
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
          <button type="submit">Register</button>
    </form>
        <p onclick="app.controllers.authController.showLogin()">Click to Login</p>
  `
}

//logout

function drawLogout() {
  console.log('logged in')
  document.getElementById('auth').innerHTML = `<button onclick="app.controllers.authController.logout()">Logout</button>`
}


export default class AuthController {
  constructor(auth) {
    console.log("auth-controller")
    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
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
    event.preventDegault();
    let creds = {
      name: event.target.username.value,
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