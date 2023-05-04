import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { errorHandler } from "./errors"
import { userRoutes } from "./routes/users.routes"


const app = express()
app.use(express.json())

app.use('/users', userRoutes)

app.use(errorHandler)


export default app