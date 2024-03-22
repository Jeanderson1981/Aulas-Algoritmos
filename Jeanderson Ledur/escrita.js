/* Exercicio 1

Faça um programa que:

a) Tenha uma variavel com a sua idade do usuário

b) Tenha uma variavel com idade do seu melhor amigo ou da sua melhor amiga

c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)*/

let idade= 43
let amigo= 71
let diferenca = amigo - idade
console.log (idade > amigo)
console.log ( "Sua idade é maior do que a do seu melhor amigo?" )
console.log (diferenca)


/*
Faça um programa que:
a) Tenha uma variavel com um numero par

b) Imprima na console o resto da divisão desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se você trocar para um número ímpar? Escreva em um comentário de código*/

let par= 10
let resto= 10 / 2 
console.log (resto)
 
//restam zero neste tipo de divisao numeros pares divididos por 2//

let impar = 9
let restoo = impar / 2
console.log (restoo)

//com numeros impares resta sempre 1 quebrados com virgula//

/*Faça um programa que tenha uma variável com sua idade em anos. Depois, imprima no console
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas */

let idadee = 43
let meses = idadee * 12
let dias = anos * 365
let horas = dias * 24

console.log (idadee, meses, dias, horas)


/*Faça um programa tenha duas variaveis com um número cada. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true O primeiro numero é igual ao segundo? false O primeiro numero é divisível pelo segundo? true O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let um= 12
let dois= 6
let restou= 0

console.log (um > dois)
console.log (um === dois)
console.log (um % dois === 0)
console.log (dois % um ===0)

