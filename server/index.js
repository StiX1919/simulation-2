const express = require('express')
const { json } = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const cors = require ('cors')


const app= express();

const port = 3000;

app.use( json() )

app.use( session({
    secret: 'so secret',
    resave: false,
    saveUninitialized: false
}))








app.listen(port, () => {console.log(`We are live on port: ${port}`)})