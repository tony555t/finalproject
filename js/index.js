const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '43a42eada7msh7e57818917bec6dp11390ejsn707f8b964a64',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

  fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes", options)
.then(response => response.json())
.then(data => {
  console.log(data)
  data.results.forEach((result, index) => {
    const card = document.getElementById(`card-${index + 1}`);
    console.log(card)
    const rname = result["name"]
    console.log(rname)
    // const speciesImage = species["Species Illustration Photo"].src
    card.querySelector(".species-image").src = result.thumbnail_url;
    card.querySelector(".name").innerHTML = rname;
    card.querySelector(".description").innerHTML = `${result.description}`;
    card.querySelector(".price").innerHTML = `price: ${result.price.total}`;

  });
});

   
  

  
  // fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
 

// fetch('https://kfc-chickens.p.rapidapi.com/chickens', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// fetch('https://kfc-chickens.p.rapidapi.com/chickens',options )

//   .then(response => response.json())
//   .then(data => {
//     // data is a JSON object containing the list of menu items
//     data.products.forEach(product => {
//       // create a new list item for each menu item
//       var item = document.createElement('li');
//       item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
//       // add the list item to the menu items list
//       document.getElementById('menu-items').appendChild(item);
//     });
//   })
//   .catch(error => console.error(error));