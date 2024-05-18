// Desafio Classificador de  nível de Herói

const prompt = require("prompt-sync")();

let nomeHeroi = prompt("Me diga seu nome, caro Herói: "); // entrada de dado, nome do Heroi

let xpHeroi = parseInt(prompt("Agora me diga seus pontos de XP: ")); // entrada de dado, Xp do Herói

console.log("Pois bem, " + nomeHeroi + ", você tem " + xpHeroi + " de experiência.");

let classificador = prompt("Já que você chegou até aqui, que tal saber sua classificação? Você deseja saber sua classificação? "); // Escolha , se deseja ser classificado ou não

if (classificador.toLowerCase() === "sim") { // se a respota for sim , (TRUE) e irá iniciar cada if abaixo
    let classificacao;

    if (xpHeroi < 1000) {
        classificacao = "Ferro";
    } 
    else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        classificacao = "Bronze";
    } 
    else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        classificacao = "Prata";
    } 
    else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        classificacao = "Ouro";
    } 
    else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        classificacao = "Platina";
    }
    else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        classificacao = "Ascendente";
    } 
    else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        classificacao = "Imortal";
    } 
    else {
        classificacao = "Radiante";
    }

    console.log(nomeHeroi + ", você é nível " + classificacao + ", meus parabéns!"); // Após testa e encontrar a opção em qual se encontra ele emite essa mensagem
} 

else {
    console.log("Pois bem, " + nomeHeroi + ", até uma próxima, boa jornada."); // Caso ele tenha opatdo por não ou qualquer outra palavra (FALSE), irá emitir essa mensagem e encerrar
}