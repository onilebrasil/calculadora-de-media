let nome = 'Guilherme';
const notaDoPrimeiroBimestre = parseInt(4);
const notaDoSegundoBimestre = parseInt(5);
const notaDoTerceiroBimestre = parseInt(6);
const notaDoQuartoBimestre = parseInt(10);

const media = () => {
const notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

let notaFixada = notaFinal.toFixed(1)

if(notaFixada >= 7) {
 `Você passou de ano, sua média é ${notaFixada}`
};
return `Você foi reprovado este ano, sua média é ${notaFixada}`;
//console.log(`Bem vindo ${nome} sua nota é ${notaFixada}`); 
}
alert(media());


// VAR.toFixed(NÚMERO) da o número de casas decimais que você quer que fique em em seu resultado/número/etc