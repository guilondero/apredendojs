// 1. delclarar uma variavel com nome wight
 let wight = 88.6

//2. atribuir valores para cada um dos dados:
    // name, string
    // age, number (integer)
    // stars, number (float)
    // isSubscribed, boolean

let name = "Bruno"
let age = 20
let stars = 4.5
let isSubscribed = true

//3. a variavel student abaixo é de que tipo de dados?
let student = {}
    //object

//4. Atribua a ela as mesmas propriedades e valores do exercicio 2.
student = {
    name: "Bruno",
    age: 20,
    stars: 4.5,
    isSubscribed: true
}
student2= {
    name: "João",
    age: 30,
    stars: 4.5,
    isSubscribed: true
}

//5. Mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <wight> kg.

console.log(`${student.name} de idade ${student.age} pesa ${wight} kg.`)

//6. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

//7. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student,
    student2
]
console.log(students[1])