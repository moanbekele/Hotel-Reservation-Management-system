const express = require('express')
const app = express()

//routes :. AKA urls in other frame works
app.get('/', (req,res) => {  // req == request from client, res == respond to client
    res.send('Response from the bitch ass api')
})

app.listen(3000, ()=> {
    console.log("Running Server on port |3000|")
})