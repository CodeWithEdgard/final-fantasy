// to do list utilizando o dom
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let arrayItens = [];

input.addEventListener('keyup', (handleKeyUp) => {
  if (handleKeyUp.code === 'Enter') {

    arrayItens.push(input.value);
    ul.innerHTML = '';
    
    input.value = "";

    arrayItens.forEach(item => {
      let li = document.createElement('li');
      li.innerHTML = `${item}`
      ul.appendChild(li);
    })
  }
});

document.addEventListener('keyup', e => {
  //console.log(e.code);
});


