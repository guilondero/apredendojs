// 1. transformar notas escolares  numericas em letras
// * 90 - 100 = A
// * 80 - 89 = B
// * 70 - 79 = C
// * 60 - 69 = D
// * 0 - 59 = F

/*
let nota = 99
function changeGradeToString(nota){
if(nota >=90 && nota <= 100){
    let nota = "A"
    console.log(nota)
}
else if(nota >=80 && nota <= 89){
    let nota = "B"
    console.log(nota)
}
else if(nota >=70 && nota <= 79){
    let nota = "C"
    console.log(nota)
}
else if(nota >=60 && nota <= 69){
    let nota = "D"
    console.log(nota)
}
else if(nota >= 0 && nota <= 59){
    let nota = "E"
    console.log(nota)
}
}

// for para testar os cases
for(let i = 0; i <= 12; i++){
    changeGradeToString(i)
}
*/




// 2 Crie um objeto que possuira 2 propriedades, ambas do tipo array
// receitas: []
// despesas: []
//agora criei uma função que ira calcular o total de receitas e despesas e ira mostrar uma mensagem 
// se a familia esta no negativo ou nao

/*
let family = {
    receitas: [250,600,856,900,282,98],
    despesas: [2000,49,869,49,09,10,29,85,06,90]
}

function calculeteSituation(object){
    let somaReceitas =0, somaDespesas =0
    for (let propriety in object){
        let soma = 0
        for (let value of object[propriety]){
            if (propriety == "receitas"){
                somaReceitas += value
            }
            else{
                somaDespesas+= value
            }

        }
    }
    let somaTotal = somaReceitas - somaDespesas
    if (somaTotal>0){
        return "Situaçao Positiva"
    }
    else{
        return "Situação Negativa"
    }
}
    
console.log(calculeteSituation(family))
*/

// 3 Criei uma função que receba um valor em celcius ou fahrenehti e faça a conversão

/*
function convertValue(valueString){
    if (valueString.includes("C") || valueString.includes("c")){
        valueString = valueString.slice(0, -1)
        stringNumber = new Number(valueString)
        
        newDegree = valueString * (9/5) + 32
        return newDegree
    }
    else if (valueString.includes("F") || valueString.includes("f")){
        valueString = valueString.slice(0, -1)
        stringNumber = new Number(valueString)
        
        newDegree = (valueString -32) * (5/9)
        return newDegree
    }
}
console.log(convertValue("80c"))
*/

// 4 Baseado no array abaixo: contar o numero de categorias e o numero de livros em cada categoria, contar o numero de autores, mostras os livros do autor auguto cury
// transformar a funcao acima em uma funcao que vai receber o nome do outro e devolver todos os livros desse autor 

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

for (let category in booksByCategory){
    for(let books in category ){
        console.log(books)
    }
}