const calcular = () => {
  const nome = document.querySelector('#nome').value
  const peso = Number(document.querySelector('#peso').value)

  const qtdAgua = (peso * 35) / 1000
  window.alert(`${nome} a quantidade ideal de água para você é ${qtdAgua.toFixed(2)} litros`)
}
