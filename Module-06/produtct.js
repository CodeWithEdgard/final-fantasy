// produto obj


// array global de produtos
const products = [];

// func para limpar
let clear = (text) => {
  return document.getElementById(text).value = '';
}

// metodo para criar 
function addProduct() {
  try {
    // captura os dados do formulario
    let productName = document.getElementById('prodName').value;
    !productName ? alert('nome do produto não pode estar vazio') : productName;

    let productDescription = document.getElementById('description').value;
    !productDescription ? alert('digite uma descrição para o produto') : productDescription;

    let productPrice = document.getElementById('price').value;
    !productPrice ? alert('produto precisa de um valor') : productPrice;

    // save
    if (productName && productDescription && productPrice) {

      const product = { name: productName, description: productDescription, price: productPrice };

      products.push(product);
      alert('Produto adicionado com sucesso!');
    }
    
    // clear
    clear('prodName');
    clear('description');
    clear('price');
    console.log(products);

  } catch (error) {
    alert(error.message)
  }

}

// metodo para remover 

// metodo para atualizar


// metodo para deletar



























// categoria
let category = { name: "" };
let categories = [];

// itens
let item = { quantity: 0, price: 0 };
let itens = [];

// pedido
let order = { moment: "", orderStatus: "" };
let orders = [];