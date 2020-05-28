const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://bakhyun:abcd1234@bolierplate-ovedx.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
.catch(err => console.groupCollapsed(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))