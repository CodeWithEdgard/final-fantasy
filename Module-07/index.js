
let h1 = document.querySelector('h1').innerHTML = 'Algumas ideias de projetos'; // titulo

let div = document.querySelector('.container-1');
let ul = document.createElement('ul');
div.append(ul);

div.before('antes da div');
div.after('depois da div');

for(let i = 0; i < 5; i++){
  let li = document.createElement('li');
  li.innerHTML = `item da lista: ${i + 1}`
  ul.append(li);
}


