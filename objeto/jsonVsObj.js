// JSON é um formato textual que não aceita função
const obj = { a:1, b:2, c:3, soma() { return a + b + c } }

// Convertendo objeto em JSON
console.log(JSON.stringify(obj))

// CONVERTENDO 'JSON' EM OBJETO
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))  // Não é um formato válido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))  // Também não é um formato válido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))  // Este é o fomrato válido para converter json em objeto
console.log(JSON.parse('{ "a": 2.2, "b": "string", "c": true, "d": {}, "e": [] }'))