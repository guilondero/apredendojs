// assim como no python, tudo é um objeto protitpo
// ou seja, sempre que tiver uma variável, ela é um objeto
// ou seja, podemos botar o . no final dela e ver os métodos que ela tem
// o . é o operador de acesso a propriedades
// __proto__ é o protótipo final da variável

const example = {
    name: "example",
    age: 20,
    city: "example"
}
console.log(example.name)
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(list.length)


// o javascript tem um certo problema com a tipagem de dados
console.log("5" + 5) // isso me retorna uma string 55
console.log("5" - 5) // isso me retorna um número 0
// para resolver isso, temos o Number() e o String()  (funciona como o int e o str do python)
let string = "5"
let number = 5
let string2 = 'a'
console.log(Number(string, typeof(string))) // isso me retorna um número 5
console.log(String(number, typeof(number)))
console.log(Number(string2, typeof(string2))) // isso me retorna um NaN (not a number) diferente do python que daria um erro
// para resolver isso, temos o parseInt() e o parseFloat()

//para separar frases por espaços, temos o split()
let phrase = "Eu quero comer"
let myArray = phrase.split(" ")
console.log(myArray)

// para juntar um array em uma string, temos o join()
let phrase2 = myArray.join(" ")
console.log(phrase2)

//para verificar se existe uma palavra em uma string, temos o includes(), ele retorna um booleano
let phrase3 = "Eu quero comer"
console.log(phrase3.includes("comer"))

//Criando um array com construtor
let myArray2 = new Array("a", "b", "c")
console.log(myArray2)
let myArray3 = new Array(10) // isso cria um array com 10 posições vazias

// manipulando arrays
let myArray4 = ["a", "b", "c"]
myArray4.push("d") // adiciona um elemento no final do array
console.log(myArray4)
myArray4.pop() // remove o último elemento do array
console.log(myArray4)
myArray4.unshift("z") // adiciona um elemento no começo do array
console.log(myArray4)
myArray4.shift() // remove o primeiro elemento do array
console.log(myArray4)

