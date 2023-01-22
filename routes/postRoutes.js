import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudnary } from 'cloudinary'

import Post from '../models/post.js'

dotenv.config()

const router = express.Router()

export default router