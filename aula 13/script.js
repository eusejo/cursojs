let varA = 'A'
let varB = 'B'
let varC = 'C'

const tempA = varA
varA = varB
varB = varC
varC = tempA

console.log(varA, varB, varC)