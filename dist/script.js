const btnMakeDrink = document.getElementById('make-drink');
const glass = document.getElementById('glass');
const drinkTitle = document.getElementById('drink-name');
const drinkList = document.getElementById('drink-list');
const ingredientColors = document.getElementById('ingredient-colors');
const ingredientList = document.getElementById('ingredient-list');
const drinks = [
  {
    name: 'Negroni',
    ingredients: [
      { text: '1 oz Campari', color: '#B8141B' },
      { text: '1 oz Gin', color: '#ADFAF7' },
      { text: '1 oz Sweet red Vermouth', color: '#A62C2B' }
    ],
    garnish: 'Orange Peel',
    glass: 'Old fashioned'
  },
  {
    name: 'Manhattan',
    ingredients: [
      { text: 'Dash Angostura bitters', color: '#620F06' },
      { text: '2 oz Rye or Canadian whisky', color: '#E89230' },
      { text: '3/4 oz Sweet red vermouth', color: '#A62C2B' }
    ],
    garnish: 'Maraschino cherry',
    glass: 'Cocktail'
  },
  {
    name: 'Old Fashioned',
    ingredients: [
      { text: '1 1/2 oz Bourbon or Rye whiskey', color: '#E89230' },
      { text: '2 dashes Angostura bitters', color: '#620F06' },
      { text: '1 Sugar cube', color: '#FFFFFF' },
      { text: 'Few dashes plain water', color: '#1CA3EC' }
    ],
    garnish: null,
    glass: 'Old fashioned'
  }
]

btnMakeDrink.addEventListener('click', getDrink);


function getDrink() {
  const drink = getIngredients(drinkList.value);
  
  ingredientColors.innerHTML = '';
  ingredientList.innerHTML = '';
  
  drink.ingredients.forEach(ingredient => {
    ingredientColors.appendChild(addIngredientColor(ingredient));
    ingredientList.appendChild(addIngredientListItem(ingredient));
  });
  
  drinkTitle.textContent = drink.name;
  
  animateIngredients(ingredientColors);
  animateIngredients(ingredientList);
}


function getIngredients(drink) {
  return drinks.find(item => item.name === drink);
}



function addIngredientColor(ingredient) {
  let node = document.createElement('div');
  
  node.className = 'ingredient';
  node.dataset.ingredient = ingredient.text;
  node.style.backgroundColor = ingredient.color;
  
  return node;
}



function addIngredientListItem(ingredient) {
  let node = document.createElement('li');
  
  node.className = 'ingredient';
  node.innerHTML = ingredient.text;
  
  return node;
}



function animateIngredients(el) {
  const list = el.querySelectorAll('.ingredient');
  
  [...list].forEach((ingredient, i) => {
    setTimeout(() => {
      ingredient.classList.add('animate');
    }, i * 400);
  })
}