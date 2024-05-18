// Desafio Classificador de  nível de Herói

const prompt = require("prompt-sync")();

let nomeHeroi = prompt("Me diga seu nome, caro Herói: ");

let xpHeroi = parseInt(prompt("Agora me diga seus pontos de XP: "));

console.log("Pois bem, " + nomeHeroi + ", você tem " + xpHeroi + " de experiência.");

let classificador = prompt("Já que você chegou até aqui, que tal saber sua classificação? Você deseja saber sua classificação? ");

if (classificador.toLowerCase() === "sim") {
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

    console.log(nomeHeroi + ", você é nível " + classificacao + ", meus parabéns!");
} 

else {
    console.log("Pois bem, " + nomeHeroi + ", até uma próxima, boa jornada.");
}