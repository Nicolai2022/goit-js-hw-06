const ingredientsMas = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const proceedMarcup = ingredientsMas.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

const ingredients = document.querySelector('ul#ingredients');


ingredients.append(...proceedMarcup);

