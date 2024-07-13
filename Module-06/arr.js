// categoria
let category = { name: "" };
let categories = [];

// itens
let item = { quantity: 0, price: 0 };
let items = [];

// pedido
let order = { moment: "", orderStatus: "" };
let orders = [];


let products = [ {name: 'edgar', price: 100}, {name: 'anny', price: 100}, {name: 'leonardo', price: 100}];

let remove = 'edgar';

let prodName = products.map(prod => prod.name);
console.log(prodName);

let index = prodName.indexOf(remove);
prodName.findIndex(remove);
prodName.splice(index,1);
console.log(prodName.findIndex(remove));