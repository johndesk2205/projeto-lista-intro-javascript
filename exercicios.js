// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = prompt("Digite a altura do retangulo:")
  largura = prompt("Digite a largura do retangulo:")

  const area = altura * largura

  return console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt("Digite o ano atual:")
  anoNascimento = prompt("Digite o ano de nascimento:")

  const difIdade = anoAtual - anoNascimento

  return console.log(difIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculo = (peso / (altura * altura))

  return calculo

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua primeira cor favorita?")
  const cor2 = prompt("Qual a sua segunda cor favorita?")
  const cor3 = prompt("Qual a sua terceira cor favorita?")
  const cores = [cor1, cor2, cor3]

  return console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = string.toUpperCase()

  return frase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const calculo = custo / valorIngresso

  return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica 

  const tamanhoString = (string1.length) === (string2.length)

  return tamanhoString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  const lista = array

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiroElemento = array[0]
  const UltimoElemento = array[array.length - 1]

  array[0] = UltimoElemento
  array[array.length - 1] = primeiroElemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const check = (string1.toUpperCase() === string2.toUpperCase())

  return check
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano'))
  const anoNascimento = Number(prompt('Digite o seu ano de nascimento'))
  const anoIdentidade = Number(prompt('Digite o ano da sua identidade'))

  const idade = anoAtual - anoNascimento
  const VencimentoIdentidade = anoAtual - anoIdentidade

  const check1 = idade <= 20 && VencimentoIdentidade >= 5
  const check2 = idade > 20 && idade <= 50 && VencimentoIdentidade >= 10
  const check3 = idade > 50 && VencimentoIdentidade >= 15

  const checkFim = check1 || check2 || check3

  return console.log(checkFim)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const check1 = ano%400 === 0
  const check2 = (ano%4 === 0) && (ano%100 !== 0)
  
  const checkAno = check1 || check2

  return checkAno

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idade = prompt(`tem mais de 18?: `)
  const idadeCheck = idade.includes("sim")
  const ensinoMedio = prompt(`tem ensino médio completo?: `)
  const ensinoMedioCheck = ensinoMedio.includes("sim")
  const horario = prompt(`tem disponibilidade de horários?: `)
  const horarioCheck = horario.includes("sim")
  
  const check = (idadeCheck && ensinoMedioCheck && horarioCheck) === true

  return console.log(check)

}