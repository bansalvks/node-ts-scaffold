// Jai Mata Di

import express from 'express'
import bodyParser from 'body-parser'
import CommonRoutes from 'src/routes/common-routes'
import cors from 'cors'
import HealthRoutes from './routes/health'

class App {
  public app: express.Application;

  constructor() {
    this.app = express()
    this.config()
  }

  private config(): void {
    // allow cors
    this.app.use(cors())
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  init() {
    HealthRoutes(this.app)
    CommonRoutes.route(this.app)

    return this.app
  }
}
export default App
