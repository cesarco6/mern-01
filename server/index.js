import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:"30mn" ,extended: true}))
app.use(bodyParser.urlencoded({limit:"30mn" ,extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://cesarco369:kache1234@cluster0.qhx9u.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { USEnewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server's runng port: ${PORT}`)))
    .catch((e) => console.log(e.messege))

    //mongoose.set('useFindAndModify', false)


