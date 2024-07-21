function createArticleWithText(className, textAbout, textContent) {
  const article = document.querySelector(className);

  const h2 = document.createElement('h2');
  h2.innerHTML = textAbout;
  article.append(h2);

  const p = document.createElement('p');
  p.innerHTML = textContent;
  article.append(p);
}

function createArticleWithList(className, textAbout, arrayItens) {
  const article = document.querySelector(className);
  
  const h2 = document.createElement('h2');
  h2.innerHTML = textAbout;
  article.append(h2);

  const ul = document.createElement('ul');
  arrayItens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
  });

  article.append(ul);
}

export { createArticleWithList, createArticleWithText}