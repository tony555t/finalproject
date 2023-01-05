//fetch data from the db.json
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/characters')
        .then(res => res.json())
        .then(data => {
            data.forEach((data) => {
                renderAnimalList(data)
            })
        })
})

//create lists of animal in the 
function renderAnimalList(animal) {
    const lists = document.querySelector('ul#list')
    const listItems = document.createElement('li')
    listItems.textContent = animal.name
    lists.appendChild(listItems)
    listItems.addEventListener('click', () => {
        animalDetails(animal)
    })
}

// desplay details of animasl
function animalDetails(animal) {
    // const div = document.querySelector('div#animalDetails')
    const img = document.querySelector('img')
    const h2 = document.querySelector('h2')
    const btn = document.getElementById('votes')
    const btnReset = document.getElementById('reset')
    img.id = "animalimage"
    img.alt = animal.name
    img.src = animal.image
    h2.textContent = animal.name

    btn.innerHTML = `${animal.votes}`
    btn.addEventListener('click', () => {
        animal.votes
        animal.votes++
        btnReset.addEventListener('click', () => {

            btn.innerHTML = `${animal.votes = 0}`
        })
        btn.innerHTML = `${animal.votes}`
    })

}