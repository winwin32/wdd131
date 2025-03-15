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

function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list

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
  // get a random recipe
  const recipe = randomRecipes(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}


init();