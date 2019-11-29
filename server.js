const express = require('express')
const app = express()
const port = process.env.PORT || 3000
 

app.get('/', (req, resp) => {
    resp.render('index.ejs')
})

app.get('/aboutus', (req, resp)=>{
    resp.render('aboutus.ejs')
})

app.get('/services', (req, resp)=>{
    resp.render('services.ejs')
})

app.get('/careers', (req, resp)=>{
    resp.render('careers.ejs')
})

app.get('/contactus', (req, resp)=>{
    resp.render('contactus.ejs')
})

app.use(express.static('public'))


app.listen(port, () => {
    console.log("listening on port: ", port)
});