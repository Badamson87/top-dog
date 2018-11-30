
import AuthService from "../app/components/auth/auth-service.js";
import AuthController from "./components/auth/auth-controller.js";
import DogController from "./components/dog/dog-controller.js";
let auth = new AuthService


class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth),
      dogController: new DogController(auth)
    }
  }
}

//@ts-ignore
window.app = new App()