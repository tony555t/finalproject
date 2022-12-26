const search= 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const categories= 'https://www.themealdb.com/api/json/v1/1/categories.php'


document.addEventListener('DOMContentLoaded',() =>{
    // row data
    const mealCategoryRow = document.getElementById('meal-categories')
    const searchRow = document.getElementById('search-result')
     // link data
     const categoriesLink = document.getElementById('category-link')
     const homeLink = document.getElementById('home-link')
     // search form
     const searchForm = document.getElementById('search-form')
     const searchInput = document.getElementById('search')
     

     // event for links
        categoriesLink.addEventListener('click', () => {
        // hide search page
        searchRow.style.display = "none"
        // show categories
        mealCategoryRow.removeAttribute('hidden')
        mealCategoryRow.style.display = "flex"

    })
     // search form submit listener
     searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const query = searchInput.value
        searchMeal(query)
        mealCategoryRow.style.display = "none"
        searchRow.style.display = "flex"
        searchRow.removeAttribute('hidden')
    })
     // create category element
     const createCategory = (image, name) => {

        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-4', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const categoryImg = document.createElement('img')
        categoryImg.classList.add('card-img-top')
        categoryImg.src = image

        const categoryTitle = document.createElement('h4')
        categoryTitle.classList.add('card-title')
        categoryTitle.innerText = name

        // append title and image to card
        cardDiv.appendChild(categoryImg)
        cardDiv.appendChild(categoryTitle)

        rootDiv.appendChild(cardDiv)

        return rootDiv

    }
    //create search results
    const createSearchResults = (name, image, link) => {
        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-3', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'px-0', 'h-100')

        const mealImg = document.createElement('img')
        mealImg.classList.add('card-img-top')
        mealImg.src = image

        const mealTitle = document.createElement('h6')
        mealTitle.classList.add('p-2')
        mealTitle.innerText = name

        const mealLink = document.createElement('a')
        mealLink.classList.add('mt-1', 'mb-2', 'me-3', 'ms-3', 'btn', 'btn-warning')
        mealLink.innerText = 'VISIT ...'
        mealLink.href = link
        mealLink.target = '_blank'

        cardDiv.appendChild(mealImg)
        cardDiv.appendChild(mealTitle)
        cardDiv.appendChild(mealLink)

        rootDiv.appendChild(cardDiv)
        return rootDiv
    }
     // load meal categories
     const loadCategories = () => {
        fetch(categories)
            .then((response) => response.json())
            .then((data) => {
                const categoriesData = data.categories
                const categoryElems = categoriesData.map(
                    cat => createCategory(cat.strCategoryThumb, cat.strCategory)
                )
                mealCategoryRow.append(...categoryElems)
            })
    }
     // search data
     const searchMeal = (meal) => {
        fetch(`${search}${meal}`)
            .then((response) => response.json())
            .then((data) => {
                const mealDataList = data.meals
                const searchResults = mealDataList.map(
                    mealData => {
                        const name = mealData.strMeal
                        const image = mealData.strMealThumb
                        const link = mealData.strYoutube
                        console.log(name)
                        return createSearchResults(name, image, link)
                    }
                )
                // replace all children
                searchRow.replaceChildren(...searchResults)
            })


}
loadCategories()
})
