const { json } = require("express")      //importando o json do express
const express = require("express")   // importando o express
const {randomUUID} = require ("crypto")  //importando o randomUUID do crypto para gerar uma id aleatória

const app = express()      // declarando a variável app como express
app.use(express.json())   // declarando que o app vai usar o json do express

const products = []  // declarando a variável products como um array vazio

app.post("/products", (request, response) =>{   // criando uma rota para o método post, aqui ira inserir os produtos 
    let { name, price, place } = request.body   // declarando as variáveis name, price e place e atribuindo os valores do body da requisição, esse body deve ser padrao em todo o post de products

    let product = {           // declarando a variável product como um objeto
        name,
        price,
        place,
        id : randomUUID(),
    }
    products.push(product)   // inserindo o objeto product no array products

    let productResponse = products.find((product) => product.name === name)   // criando a variável productResponse e atribuindo o valor do produto que foi inserido no array products
    return response.json(productResponse)   // retornando o produto que foi inserido no array products
})

app.get("/products", (request, response) => {   // criando uma rota para o método get, aqui ira retornar todos os produtos
    return response.json(products)  // retornando todos os produtos
})

app.get("/products/:name", (request, response) => {  // criando uma rota para o método get, aqui ira retornar um produto específico
    let { name } = request.params  // declarando a variável name e atribuindo o valor do parametro da requisição

    let productResponse = products.find((product) => product.name === name)  // criando a variável productResponse e atribuindo o valor do produto que foi inserido no array products
    return response.json(productResponse) // retornando o produto que foi inserido no array products
}) 

app.put("/products/:name", (request, response) => { // criando uma rota para o método put, aqui ira atualizar um produto específico
    let { name } = request.params  // declarando a variável name e atribuindo o valor do parametro da requisição

    let {price, place } = request.body  // declarando as variáveis price e place e atribuindo os valores do body da requisição, esse body deve ser padrao em todo o put de products

    let productResponse = products.find((product) => product.name === name)  // criando a variável productResponse e atribuindo o valor do produto que foi inserido no array products
    productResponse.price = price  // atualizando o valor do preço do produto
    productResponse.place = place  // atualizando o valor do lugar do produto

    return response.json(productResponse)  // retornando o produto com os valores atualizados
})  

app.delete("/products/:name", (request, response) => {  // criando uma rota para o método delete, aqui ira deletar um produto específico
    let { name } = request.params // declarando a variável name e atribuindo o valor do parametro da requisição

    let productResponse = products.find((product) => product.name === name)  // criando a variável productResponse e atribuindo o valor do produto que foi inserido no array products

    let i = 0
    products.forEach(element => {  // criando um forEach para percorrer o array products lendo cada elemento (cada elemento possui nome, preço, lugar e id)
        if (element === productResponse) {   // se o elemento for igual ao produto que foi inserido no array products
        products.splice(i, 1)  // deleta o elemento do array products
        }
        i++  
    })
    response.json(products) // retorna o array products sem o produto que foi deletado
})

app.listen(8000, () => console.log("RODOUUUUU"))  // botando o servidor para rodar na porta 8000 

//comenteariooo
