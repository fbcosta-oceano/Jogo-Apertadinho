var numeroSecreto = parseInt(Math.random() * 101)
var chuteMenor = 0
var chuteMaior = 100
var input = document.getElementById('chuteId')

document.getElementById('msgChuteId').innerHTML='Digite um numero entre ' + chuteMenor + ' e ' + chuteMaior;

input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    checkChute()
  }
});

function checkChute() {
  var chute = document.getElementById('chuteId').value
  if ((chute==='') || !(Number.isInteger(+chute))) {
    document.getElementById('msgChuteId').innerHTML='Voce deve digitar um numero inteiro entre ' + chuteMenor + ' e ' + chuteMaior;
    document.getElementById('chuteId').value = ''
  }
  else if (chute == numeroSecreto) {
    alert('O numero secreto é: ' + numeroSecreto + '.Você perdeu.')
    reset()
  }
  else if (chute > numeroSecreto) {
    if (chute<chuteMaior) {
      chuteMaior = chute
    }
    if ((chuteMenor == numeroSecreto-1) && (chuteMaior == numeroSecreto+1)){
      alert('O numero secreto é: ' + numeroSecreto + '. Você ganhou.')
      reset()
      return
    }
    document.getElementById('msgChuteId').innerHTML='O número secreto é menor. Digite um numero entre ' + chuteMenor + ' e ' + chuteMaior
    document.getElementById('chuteId').value = ''
  }
  else if (chute < numeroSecreto) {
    if (chute>chuteMenor) {
      chuteMenor = chute
    }
    if ((chuteMenor == numeroSecreto-1) && (chuteMaior == numeroSecreto+1)){
      alert('O numero secreto é: ' + numeroSecreto + '. Você ganhou.')
      reset()
      return
    }
    document.getElementById('msgChuteId').innerHTML='O número secreto é menor. Digite um numero entre ' + chuteMenor + ' e ' + chuteMaior
    document.getElementById('chuteId').value = ''
  }
  else {
  document.getElementById('msgChuteId').innerHTML='Voce deve digitar um numero inteiro entre ' + chuteMenor + ' e ' + chuteMaior;
  document.getElementById('chuteId').value = ''
  }
}

function reset() {
  numeroSecreto = parseInt(Math.random() * 101)
  chuteMenor = 0
  chuteMaior = 100
  document.getElementById('chuteId').value = ''
  document.getElementById('msgChuteId').innerHTML='Digite um numero entre ' + chuteMenor + ' e ' + chuteMaior;
}