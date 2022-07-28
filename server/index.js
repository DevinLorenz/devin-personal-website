const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

//------------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, "/../public")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/main.html"));
});

//------------------------------------------------------------------------------

const port = process.env.PORT || 4524

app.listen(port, () => {
    console.log(`server jamming on port ${port}`)
})