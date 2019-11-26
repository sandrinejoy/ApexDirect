const express = require('express')
const app = express()
const port = process.env.PORT || 3000
 

app.get('/', (req, resp) => {
    resp.render('index.ejs')
})


app.use(express.static('public'))
// app.use()

app.listen(port, () => {
    console.log("listening on port: ", port)
});