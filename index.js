function helloworld() {
    console.log('Hello')
}

const saudacao = () => {
    
    var data = new Date()
    return data.getHours() <= 12 ? "bom dia" : data.getHours() <= 18 ? "boa tarde" : "boa noite"

}

const teste = (a,b) => { 
    const teste2 = () => {
        console.log( 'testea' )
      }
  }

  
console.log('bonitos')
const soma = (a,b) =>  a + b 

console.log( soma(2,3))

const divisao = function (a,b) { return a/b }
console.log(divisao(10,2))

const mult = (a,b) => { return a * b }
console.log(mult(40,5))
