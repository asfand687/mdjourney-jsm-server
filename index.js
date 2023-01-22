import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

// middleware
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded())
app.use(cors())

app.get('/', async (req, res) => {
  res.send("Hello from Mall-E")
})

const startServer = async () => {
  app.listen(8080, () => {
    console.log("Server has started on port: http://localhost:8080")
  })
}

startServer()
