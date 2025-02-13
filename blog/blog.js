const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
	
]

firstRow = true

function createArticle(article){
	const generatedArticle = document.createElement('article')
	generatedArticle.classList.add("grid-item")
	const articleString = `<h2>${article.title}</h2>
            <img class="book-cover" src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>'${article.description}'</p>`
	generatedArticle.innerHTML = articleString

	const generatedAside = document.createElement('aside')
	generatedAside.classList.add("grid-item")
	const asideString = `<time>${article.date}</time>
            <p>${article.ages}</p>
            <p>${article.genre}</p>
            <p>${article.stars}</p>`
	generatedAside.innerHTML = asideString


	const container = document.querySelector(".grid-container")
	container.appendChild(generatedAside)
	container.appendChild(generatedArticle)
	if (firstRow){
		const generatedSection = document.createElement('section')
		generatedSection.classList.add("grid-item")
		const sectionString = `<p>Filter Form WIP</p>`
		generatedSection.innerHTML = sectionString
		firstRow = false
		container.appendChild(generatedSection)
	}
	else{ 
		container.appendChild(document.createElement('div'))
	}

}
	
articles.forEach(createArticle)