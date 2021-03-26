const express = require('express');
const router = require('./router/router');
const repo= require('./repo/userRepo');

var bp = require('body-parser')

const port = 4000;
const app = express();



app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

router(app,repo);

app.listen(
    port,'localhost',()=>{
        console.log(`server is running on port ${port}`);
    }
);

