// Para declarar uma funcao se usa a palavra reservada function
function sayHello() {
    console.log("Hello World")
}

// Para chamar a funcao se usa o nome dela seguido de parenteses
sayHello()

// Funcoes podem receber parametros, e serem declaradas dentro de variaveis
const soma = function (a, b) {   // aqui é uma funcao com parametros
    let c = a + b
    console.log(c)
    return c   // qualquer coisa dps do return nao é executada
}

soma(1, 2) // aqui é uma chamada de funcao com argumentos

const subtracao = function (a, b) {
    return a - b   // aqui o return é usado para retornar um valor
}

subtracaoResult = subtracao(2, 1)  // aqui o valor retornado é armazenado em uma variavel
console.log(subtracaoResult)

// Funcoes sofrem hoisting, ou seja, podem ser chamadas antes de serem declaradas
// Isso acontece com variaveis var tambem
sayMyName() // aqui a funcao é chamada antes de ser declarada

function sayMyName() {
    console.log("Heisenberg")
}

// Funcoes podem ser declaradas como arrow functions
const somaArrow = (a, b) => {  // nao precisei usar a palavra reservada function
    console.log(a + b)
}

somaArrow(9, 1)

//Callback functions
// Sao funcoes que sao passadas como argumentos para outras funcoes 
function echo(value) {
    value()
}

echo(
    () => {  // aqui é uma funcao anonima
        console.log("callback function")
    })

// outra maneira de chamar uma callback
echo(function()
    {
        console.log("callback function 2")
    })

// Funcoes construtoras
// Sao funcoes que sao usadas para criar objetos
function Pessoa(name){
    this.name = name // this é usado para referenciar o objeto que está sendo criado (mesmo que self do python)
    this.sayHello = function() {    // da pra criar funcoes dentro do objeto
        console.log("Hello " + this.name)
    }
}

const pessoa1 = new Pessoa("Heisenberg") // aqui é criado um objeto a partir da funcao construtora
console.log(pessoa1)
console.log(pessoa1.name)
pessoa1.sayHello() // aqui é chamada uma funcao do objeto

