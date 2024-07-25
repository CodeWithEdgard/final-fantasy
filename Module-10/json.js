
// parse: pega uma string e transforma em um obj
// stringfy: pega um objeto e transforma em string

let person = '{"nome": "Edgar", "sobrenome": "Mendes"}';
let obj = { marca: 'fiat', modelo: 'zyx', cor: 'preto'};

let jsonObj =JSON.parse(person);

console.log(JSON.stringify(obj));
