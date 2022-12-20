const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '43a42eada7msh7e57818917bec6dp11390ejsn707f8b964a64',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
// fetch ur
  fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes", options)
.then(response => response.json())
.then(data => {
  console.log(data)
  data.results.forEach((result, index) => {
    const card = document.getElementById(`card-${index + 1}`);
    console.log(card)
    const rname = result["name"]
    console.log(rname)
    
    card.querySelector(".species-image").src = result.thumbnail_url;
    card.querySelector(".name").innerHTML = rname;
    card.querySelector(".description").innerHTML = `${result.description}`;
    card.querySelector(".price").innerHTML = `price: ${result.price.total}`;

  });
});

   
  

  