import recipes from './recipes.mjs';

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ``
    for (let i in tags){
        html = `${html}
        <li>${tags[i]}</li>`
    }
     
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">
    `
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++){
        if(i < rating){ html += `<span aria-hidden="true" class="icon-star">⭐</span>
            ` }
        else{ html += `<span aria-hidden="true" class="icon-star-empty">☆</span>
            ` }
        
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe['image']}" alt="Image of ${recipe['description']}" />
	<figcaption>
		<ul class="recipe__tags">
			${tagsTemplate(recipe['tags'])}
			
		</ul>
		<h2><a href="https://winwin32.github.io/wdd131/recipes/index.html">${recipe['name']}</a></h2>
		<p class="recipe__ratings">
            ${ratingTemplate(recipe['rating'])}
		</p>
		<p class="recipe__description">
            ${recipe['description']}
		</p>
</figcaption>
</figure>`;
}


function randomRecipes(recipeArray){
    let i = Math.floor(Math.random()*recipeArray.length)
    return recipeArray[i]
}

function filterRecipes(query) {
	const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    return sorted;
}

function searchHandler(e) { 
	e.preventDefault();
    
    const searchInput = document.querySelector(".searchInput");
    const query = searchInput.value.trim().toLowerCase(); 
    const filteredRecipes = filterRecipes(query);
    
    renderRecipes(filteredRecipes);

}

function renderRecipes(recipe) {

    const searchDiv = document.querySelector(".search");

    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe"
    recipeDiv.innerHTML = recipeTemplate(recipe)

    if (searchDiv) {
        searchDiv.insertAdjacentElement("afterend", recipeDiv);
    }
}

function init() {
  const recipe = randomRecipes(recipes)
  renderRecipes(recipe);
}


init();

document.querySelector(".search").addEventListener("submit", searchHandler);