

// array usuario
let users = [];

let createUser = () => {

  let inputName = prompt("Digite seu nome:");
  let inputEmail = prompt("Digite seu email:");
  let inputPhone = prompt("Digite seu telefone:");
  let inputPassword = prompt("Digite sua senha:");

  if (!inputName || !inputEmail || !inputPhone || !inputPassword) {
    alert("por favor digite um usuario valido");
  }

  let user = { name: inputName, email: inputEmail, phone: inputPhone, password: inputPassword };

  users.push(user);

}

let showUser = (users, index) => {

  alert(`\n nome: ${users[index].name}\n email: ${users[index].email}\n phone: ${users[index].phone}`);

}

let showAllUsers = (users) => {
  for(let user of users) {
    alert(`\n nome: ${user.name}\n email: ${user.email}\n phone: ${user.phone}`);
  }
}

// app
while (true) {

  let input = prompt("digite a action");

  if (!input) {
    break;
  }

  switch (input) {
    case "criar": {
      createUser();
      break;
    }
    case "listar": {
      let index = prompt("qual o id do usuario:");
      showUser(users, index);
      break;
    }
    case "todos": {
      showAllUsers(users);
      break;
    }
  }

}

// produto obj
let product = { name: "", description: "", price: 0 };
let products = [];

// categoria
let category = { name: "" };
let categories = [];

// itens
let item = { quantity: 0, price: 0 };
let itens = [];

// pedido
let order = { moment: "", orderStatus: "" };
let orders = [];










