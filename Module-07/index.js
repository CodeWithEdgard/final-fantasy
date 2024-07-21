let h1 = document.querySelector('.titulo').innerHTML = `Dev. Edgar`;

let aboutMe = `Eu sou <strong>Edgar Sousa Mendes</strong>, um entusiasta de tecnologia e apaixonado por <strong>Desenvolvimento web</strong>.
             Atualmente, estou explorando a área de <strong>Engenharia de Software</strong>.
              Resido em Suzano, São Paulo, com minha família, que é minha principal fonte de inspiração.`;

let jorney = `Iniciei minha jornada na programação Java em 2023 e desde então tenho me dedicado ao aprimoramento constante.
             No momento, estou focado no desenvolvimento ágil e eficiente utilizando <strong>Spring Boot</strong>.
              Além disso, possuo conhecimentos básicos em <strong>JavaScript, HTML, CSS, SQL e Node.js com Express</strong>.`

let arr = ['Desenvolvimento Web: HTML, CSS, JavaScript, Node.js, Express',
  'Java: Spring Boot',
  'Banco de Dados: SQL (MySQL)',
  'Ferramentas: Git, Swagger',
  'Design Responsivo: Adaptabilidade para diferentes dispositivos'];

let about = art('.about-me', 'Sobre Mim', aboutMe);
art('.jorney', 'Jornada Profissional', jorney);
art2('.skills', 'Habilidades', arr);


function art(className, textAbout, textContent) {
  let article = document.querySelector(className);

  let h2 = document.createElement('h2');
  h2.innerHTML = textAbout;
  article.append(h2);

  let p = document.createElement('p');
  p.innerHTML = textContent
  article.append(p);
}

function art2(className, textAbout, arrayItens) {
  let article = document.querySelector(className);
  let h2 = document.createElement('h2');
  h2.innerHTML = textAbout;


  let ul = document.querySelector('.list');

  arrayItens.forEach(itens => {
    let li = document.createElement('li');
    li.textContent = itens;
    ul.append(li)
  });

  article.append(h2, ul);
}



