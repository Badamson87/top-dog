
import AuthService from "../app/components/auth/auth-service.js";
import AuthController from "./components/auth/auth-controller.js";
let auth = new AuthService


class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth)
    }
  }
}

//@ts-ignore
window.app = new App()