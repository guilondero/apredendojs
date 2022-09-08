const { json } = require("express")
const express = require("express")
const {randomUUID} = require ("crypto")



const app = express()

app.use(express.json())

const products = []

app.post("/products", (request, response) =>{

    let { name, price, place } = request.body
    
    let product = {
        name,
        price,
        place,
        id : randomUUID(),
    }


app.listen(8000, () => console.log("RODOUUUUU"))