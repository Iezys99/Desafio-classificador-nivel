let nomeHeroi = "Rudeos"
let xpHeroi = 1000
const mensagem = "O Heroi de nome "
const mensagem2 = " Está no nível de "

if(xpHeroi<1000){
    console.log(mensagem + nomeHeroi + mensagem2 + "Ferro")}
    else if (xpHeroi>1000 && xpHeroi<=2000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Bronze")}
    else if (xpHeroi>2000 && xpHeroi<=5000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Prata")}
    else if (xpHeroi>5000 && xpHeroi<=7000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Ouro")}
    else if (xpHeroi>7000 && xpHeroi<=8000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Platina")}
    else if (xpHeroi>8000 && xpHeroi<=9000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Ascendente")}
    else if (xpHeroi>9000 && xpHeroi<=10000){
        console.log(mensagem + nomeHeroi + mensagem2 + "Imortal")}
else {
    console.log(mensagem + nomeHeroi + mensagem2 + "Radiante")} 