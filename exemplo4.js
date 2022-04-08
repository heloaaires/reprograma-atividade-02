//definir o preço do aluguel por dia
//definir quantos dias de aluguel
//quantidade de km percorrido pelo carro
//quantidade de dias alugado pelo cliente

let precoAluguelDia = 60
let precoKm = 0.15
let kmRodado = 200
let diasAlugado = 15
let precoFinal = ((precoAluguelDia * diasAlugado) + (precoKm * kmRodado))
console.log (`O preço final pelo aluguel do carro é R$ ${precoFinal}.`)