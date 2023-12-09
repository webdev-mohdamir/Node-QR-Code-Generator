const express = require('express');
const bodyParser = require('body-parser');
const qrCodeGenerator = require('./qrCodeGenerator');

// Creating app
const app = express();

// USing ejs view
app.set("view engine", "ejs");

// USing body parser to get data form dom
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render("index", {qrImgPath:'', errorMsg:''});
});

// Post request
app.post("/", async (req, res)=>{
    
    const inputUrl = req.body.url.trim();

    if(!inputUrl){
        return res.render("index", {qrImgPath:'', errorMsg:'Invalid Input'})
    }

    const qrImgPath = await qrCodeGenerator(inputUrl);

    res.render("index", {qrImgPath:qrImgPath, errorMsg:''})

});

// Listening port or Starting sever
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is Running.`);
});