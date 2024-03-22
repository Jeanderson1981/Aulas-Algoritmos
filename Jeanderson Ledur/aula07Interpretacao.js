const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { console.log("Passou no teste.") } 

else { console.log("Não passou no teste.") }
 
/*


) Explique o que o código faz. Qual o teste que ele realiza? realiza o teste de divisao por 2 com resto zero imprime "passou" se o resto nao for divisivel por dois com o resto zero imprime "nao passou"

b) Para que tipos de números ele imprime no console "Passou no teste"? Para numeros  com resto zero

c) Para que tipos de números a mensagem é "Não passou no teste"? para numeros impares com resto diferente de zero


2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
*/

 
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
a) Para que serve o código acima? Para identificar a Fruta e seus relativos precos

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? Preco = 2.25

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? vai imprimir dois precos para pera 5.5 e 5

Leia o código abaixo:
*/
const numeroo = Number(("50"))

if(numeroo > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
/*
a) O que a primeira linha está fazendo? Condicionando que o numero digitado seja maior do que 0

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? para 10 passou no teste para menos 10 nada acontecera

c) Haverá algum erro no console? sim se o numero for menor de 0 
*/
