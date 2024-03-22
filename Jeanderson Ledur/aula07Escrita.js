/*Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).*/

let dirigir = 18
let habilitado = dirigir >= 18
if ( habilitado <= 18 ) { console.log ("nao pode dirigir")}

else 
console.log ( " ok pode dirigir" )


/*a) Faça um variaveis para receber a idade do usuário.

b) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

 2 Agora faça um programa que verifica que turno do dia um aluno estuda. Escolha entre M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else. 💡 Dica ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!" Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

Se o usuário digitar "V", a saída deve ser: "Boa Tarde!" */

let turno = "M"

if (turno === "M"){ 
    console.log ( "bom dia") 
} else if (turno === "V"){ 
    console.log ("boa tarde") 
} else if (turno === 'N'){
    console.log('boa noite')
} else {
    console.log  ("Não existe este turno")
}



// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.//

let turnonew = "M"

switch (turnonew) {
    case "M":
        console.log ( "Turno da Manhã")
        break
    case "V":
        console.log ("Turno da Tarde")
        break
    case "N":
        console.log ("Turno da Noite")
        break
        default:
            console.log ("Turno nao Encontrado")





} 



 4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme"

*/
let genero = 'fantasia'
let ingresso = 15

if (genero === 'fantasia' && ingresso < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme')
}








