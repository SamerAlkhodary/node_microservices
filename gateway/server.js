const express = require('express');
const router = require('./router/router');


var bp = require('body-parser')

const port = 4444;
const app = express();



app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

router(app);

app.listen(
    port,'0.0.0.0',()=>{
        console.log(`server is running on port ${port}`);
    }
);

