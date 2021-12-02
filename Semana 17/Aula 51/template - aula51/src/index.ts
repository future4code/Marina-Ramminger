import dotenv from 'dotenv'
import app from "./app"
import {getAddress, insertAdress} from "./endpoints/getAddress"

dotenv.config()

getAddress("90050100").then(console.log)

insertAdress("90050100", 250, "ap.104").then(console.log)


