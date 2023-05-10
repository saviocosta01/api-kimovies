import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { errorHandler } from "./errors"
import { userRoutes } from "./routes/users.routes"
import { loginUserRoutes } from "./routes/login.routes"
import { categoryRoutes } from "./routes/categories.routes"
import { realEstateRoutes } from "./routes/realEstate.routes"
import { scheduleRoutes } from "./routes/schedules.routes"


const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginUserRoutes)
app.use('/categories', categoryRoutes)
app.use("/realEstate", realEstateRoutes)
app.use('/schedules', scheduleRoutes)


app.use(errorHandler)


export default app