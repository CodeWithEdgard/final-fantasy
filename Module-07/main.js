import { aboutMe, jorney, skillsList, projectsList } from './variables.js';
import { createArticleWithList, createArticleWithText } from './function.js';

document.querySelector('.titulo').innerHTML = `Edgar Mendes`;
document.querySelector('.sub-title').innerHTML = `Desenvolvedor de Software`;
document.querySelector('footer span').innerHTML = `Edgar Sousa Mendes, 2024 - Todos os direitos reservados.`;

createArticleWithText('.about-me', 'Sobre Mim', aboutMe);
createArticleWithText('.jorney', 'Jornada Profissional', jorney);
createArticleWithList('.skills', 'Habilidades', skillsList);
createArticleWithList('.projects', 'Projetos', projectsList);

// Adiciona o comportamento ao passar o mouse sobre o elemento "Sobre Mim"
const aboutMeSection = document.querySelector('.about-me');
const tooltip = document.getElementById('tooltip');

let ab = {
  idade: '32',
  cidade: 'Suzano',
  estado: 'SP',
  email: 'mendesbr92@gmail.com',
  telefone: '11987654321',
}
aboutMeSection.addEventListener('mouseover', (event) => {
  tooltip.style.display = 'block';
  tooltip.innerHTML = `Idade: ${ab.idade} anos, Cidade: ${ab.cidade}-${ab.estado}, Email: ${ab.email}, Cel: ${ab.telefone}`;
});

aboutMeSection.addEventListener('mousemove', (event) => {
  positionTooltip(event);
});

aboutMeSection.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

function positionTooltip(event) {
  const tooltip = document.getElementById('tooltip');
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const pageWidth = window.innerWidth;

  let left = event.pageX + 10;
  let top = event.pageY + 10;

  if (left + tooltipWidth > pageWidth) {
    left = event.pageX - tooltipWidth - 10;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}