import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()

// middleware
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded())
app.use(cors())
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send("Hello from Mall-E")
})

const startServer = async () => {
  try {
    connectDatabase(process.env.MONGODB_URI)
    app.listen(8080, () => {
      console.log("Server has started on port: http://localhost:8080")
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()
