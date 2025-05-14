function calcular(){
  let res = document.getElementById('res');
  let mensagens = Number(document.getElementById('mensagens').value);
  const valorInicial = 5
  res.innerHTML = ``;

  if(mensagens <= 75 ){
    res.innerHTML = `quantidade de mensagens dentro do plano base`

  }else if(mensagens > 75 && mensagens <= 240){
    let taxa = (mensagens - 75) * 0.05
    let fatura = taxa + valorInicial

    res.innerHTML = `o valor da fatura é de R$ ${fatura.toFixed(2)}`
  }else if(mensagens > 240 ){
    let taxa = (mensagens - 240) * 0.10
     let fatura = taxa + valorInicial

    res.innerHTML = `o valor da fatura é de R$ ${fatura.toFixed(2)}`
  }
  
}