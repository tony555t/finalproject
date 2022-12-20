document.addEventListener('DOMContentLoaded', () => {


  // ROWS DATA
  const randomMealRow = document.getElementById('random-meal')
  const mealCategoryRow = document.getElementById('menu')
  const searchRow = document.getElementById('search-result')

  // LINKS DATA
  const menuLink = document.getElementById('menu-link')
  const homeLink = document.getElementById('home-link')

  // search form
  const searchForm = document.getElementById('search-form')
  const searchInput = document.getElementById('search')


    // CLICK EVENTS FOR LINKS
      menuLink.addEventListener('click', () => {
      // hide random meal
      menu.style.display = "none"
      // hide search page
      searchRow.style.display = "none"
      // show categories
      mealCategoryRow.removeAttribute('hidden')
      mealCategoryRow.style.display = "flex"

  })

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43a42eada7msh7e57818917bec6dp11390ejsn707f8b964a64',
		'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
	}
};

// fetch('https://kfc-chickens.p.rapidapi.com/chickens', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

fetch('https://kfc-chickens.p.rapidapi.com/chickens',options )

  .then(response => response.json())
  .then(data => {
    // data is a JSON object containing the list of menu items
    data.products.forEach(product => {
      // create a new list item for each menu item
      var item = document.createElement('li');
      item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
      // add the list item to the menu items list
      document.getElementById('menu-items').appendChild(item);
    });
  })
  .catch(error => console.error(error));