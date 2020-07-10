const saudacao = () => {
  const data = new Date()

  return data.getHours() <= 12 ? 'bom dia' : 'bom pós dia'
}

// TODO testes

// FIXME here
console.log('bonitos')
const soma = (a, b) => a + b

console.log(soma(2, 3))

const divisao = (a, b) => a / b
console.log(divisao(10, 2))

const mult = (a, b) => a * b
console.log(mult(40, 5))

console.log(saudacao())
