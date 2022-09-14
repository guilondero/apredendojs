// a diferença entre null e Undefined é que o null é quando temos um OBJETO que não tem valor(vazio)
// e o undefined é quando uma variável foi declarada mas não foi atribuido nenhum valor a ela.

// Exemplo de null
objetctNull = {}
console.log(objetctNull, typeof objetctNull)


// Exemplo de undefined
let objectUndefined
console.log(objectUndefined, typeof objectUndefined)
// posso atualizar o valor de uma variável undefined
objectUndefined = "oie bruno"
console.log(objectUndefined, typeof objectUndefined)


// array é tipo a lista no python, aqui ele é um objeto, o index começa em 0
let array = [1,2,3,4,5,6,7,8,9,10]  // array de numeros 
let array2 = ["Bruno", "João", "Maria", "José"] // array de strings
// também pode ter um array de objetos (objeto é como um dicionário no python)
let array3 = [{nome: "Bruno", idade: 20}, {nome: "João", idade: 30}, {nome: "Maria", idade: 40}, {nome: "José", idade: 50}]
// também pode ter um array de arrays
let array4 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]


//DIFERENÇA ENTRE VAR LET OU CONSTA //

//var é global e pode ser redeclarada
console.log("var antes do escopo", var1) // var1 não foi declarada, mas não da erro
{
    var var1 = "var dentro do escopo"
}
console.log("var depois do escopo", var1) // var1 foi declarada dentro do escopo, mas não da erro

//let é local e não pode ser redeclarada mas pode ser atualizada
//console.log("let antes do escopo", let1) // let1 não foi declarada, da erro
{
    let let1 = "let dentro do escopo"
    console.log("let dentro do escopo", let1)
    let1 = "let dentro do escopo atualizada"
    console.log(let1)
}
//console.log("let depois do escopo", let1) // let1 foi declarada dentro do escopo, da erro

//const é local e não pode ser redeclarada e nem editada o valor
//console.log("const antes do escopo", const1) // const1 não foi declarada, da erro
{
    const const1 = "const dentro do escopo"
    console.log("const dentro do escopo", const1)
    //const1 = "const dentro do escopo atualizada" // da erro
    //console.log(const1)
}
//console.log("const depois do escopo", const1) // const1 foi declarada dentro do escopo, da erro

// AGRUPAMENTO DE DECLARAÇÕES E CONCATENAÇÃO DE STRING //

// variaveis podem ser declaradas em uma linha separadas por virgula

//let age, name, place
    // ou
let age=20, name="Bruno", place="São Paulo"

// concatenar string
console.log("Meu nome é " + name + " e tenho " + age + " anos e moro em " + place) //maneira classica
console.log(`Meu nome é ${name} e tenho ${age} anos e moros em ${place}`) //maneira ELITE

// OPERADORES ARITMÉTICOS //
// + SOMA
// - SUBTRAÇÃO
// * MULTIPLICAÇÃO
// / DIVISÃO
// % RESTO DA DIVISÃO
// ** POTENCIAÇÃO

// OPERADORES DE COMPARAÇÃO //
// == IGUAL
// === IGUAL E DO MESMO TIPO DE DADO
// != DIFERENTE
// !== DIFERENTE E DE TIPOS DIFERENTES
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL

// OPERADORES LÓGICOS //
// && E
// || OU
// ! NÃO

// OBJETOS //
// objetos são como dicionários no python, possui uma chave e um valor, são declarados com chaves {}
// exemplo de objeto, cada atributo deve ser separado por virgula
let pessoa = {
    nome: "Bruno",
    idade: 20,
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil"
}
// para acessar um atributo do objeto, basta colocar o nome do objeto . nome do atributo
console.log(pessoa.nome)
// para atualizar um atributo do objeto, basta colocar o nome do objeto . nome do atributo = novo valor
pessoa.nome = "João"
console.log(pessoa.nome)











