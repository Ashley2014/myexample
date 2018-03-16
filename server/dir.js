console.log(__dirname)
const express = require('express')
const path = require('path')
let app=express()

app.get('/favicon.png', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/logo-48.png'));
});
app.listen(1222, () => {
    console.log(`server started at localhost:${1222}`)
})