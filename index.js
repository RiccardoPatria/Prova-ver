const express = require("express")
const app = new express()
const path = require("path")
const fetch = require("node-fetch")
app.use(express.static(path.join(__dirname, "public")))
app.use(require("body-parser").json())




app.get("/accreditamento", (req,res)=> {
  res.json({nome:"Riccardo", cognome: "Patria"})
  console.log(nome)
})

//const data = 0;

//app.post("/somma-pari", (req, res) => {
   //const body = req.body;
   //const pari = body.filter(e => (e-1)%2);
   //const somma = pari.reduce((acc, e) => {
    //acc += e
    //return acc
  //}, 0)
   //console.log(somma)

//})


app.post("/lista-parole-a", (req, res) => {
   const parole = req.parole;
   const pari = data.filter(e => (e-1)%2);
   const somma = pari.reduce((acc, e) => {
    acc += e
    return acc
  }, 0)
   console.log(somma)

})

app.listen(8080, console.log("Server port: 8080 \nServer link: http://localhost:8080"))