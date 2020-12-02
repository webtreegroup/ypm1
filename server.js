const express = require('express')

const app = express()
const PORT = 4000

app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/static`))

app.get("/default", function(request, response){
    response.render("default", {
        title: "Default page"
    })
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})