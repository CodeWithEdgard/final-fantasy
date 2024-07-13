// array de usuarios;
const users = [];

function createUser() {

  let inputName = document.getElementById('name').value;
  let inputEmail = document.getElementById('email').value;
  let inputPhone = document.getElementById('phone').value;
  let inputPassword = document.getElementById('senha').value;

  const user = { name: inputName, email: inputEmail, phone: inputPhone, password: inputPassword };
  users.push(user);

  // Limpar campos do formulário após salvar
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('senha').value = '';
}

// Função para mostrar todos os usuários
let showAllUsers = () => {
  let div = document.getElementById('div');
  div.innerHTML = '<h1>Usuarios:</h1>';

  for (let user of users) {
    div.innerHTML += `<p>${user.name} ${user.email} ${user.phone}</p>`;
  }
}

// Chamada das funções
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('salvar').addEventListener('click', createUser);
document.getElementById('mostrar').addEventListener('click', () => showAllUsers(users));
});










