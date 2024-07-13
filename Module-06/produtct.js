// array global de produtos
const products = [];

// func para limpar
let clear = (id) => {
  document.getElementById(id).value = '';
}

// método para criar
function addProduct() {
  try {
    // captura os dados do formulário
    let productName = document.getElementById('prodName').value;
    if (!productName) {
      alert('Nome do produto não pode estar vazio');
      return;
    }

    let productDescription = document.getElementById('description').value;
    if (!productDescription) {
      alert('Digite uma descrição para o produto');
      return;
    }

    let productPrice = document.getElementById('price').value;
    if (!productPrice) {
      alert('Produto precisa de um valor');
      return;
    }

    // save
    const product = { name: productName, description: productDescription, price: productPrice };
    products.push(product);
    alert('Produto adicionado com sucesso!');

    // clear
    clear('prodName');
    clear('description');
    clear('price');

    // mostrar produtos atualizados
    showProducts();
    console.log(products);

  } catch (error) {
    alert(error.message);
  }
}

// método para mostrar produtos
function showProducts() {
  let show = document.getElementById('show');
  show.innerHTML = ''; // Limpar a lista antes de adicionar os itens novamente

  products.forEach((product) => {
    let li = document.createElement('li');
    li.textContent = `Nome: ${product.name}, Descrição: ${product.description}, Preço: ${product.price}`;
    show.appendChild(li);
  });
}

// Evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  showProducts(); // Mostrar produtos existentes na carga da página, se houver
  removeProduct();
});

// método para remover produto 
function removeProduct() {

  let remove = document.getElementById('remove').value;
  let index = products.indexOf(remove);

  products.splice(index,1);
  showProducts();

}

// método para atualizar produto
function updateProduct() {
  
  let update = document.getElementById('update').value;

  let index = products.indexOf(update);

  let newProduct = {}

  products[index] = newProduct;

  showProducts();
  console.log(products);
}
