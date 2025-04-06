const artGallery = [
{
  description:
    "Eve was an honorable and brave woman who made a hard choice that led to many good things for her and her family.",
  image: './images/eve.png',
  name: 'Eve\'s Choice',
},
{
  description:
    "My uncle was a patient person who helped me feel God's love. When I was young he helped me feel better about my art and encouraged me to keep trying.",
  image: './images/family.jpg',
  name: 'Learning from Family',
},
{
  description:
    "Jesus is a gentle man and I wanted to capture his calm, quiet but powerful nature.",
  image: './images/savior.png',
  name: 'Chosen Savior',
}
]



const menuToggle = document.querySelector('.menu-toggle');
const viewerPopout = document.querySelector(".viewer")
const xButton = document.querySelector(".viewer button")

function artTemplate(art) {
  if (art) {
    return `<h2>Featured Art</h2>
    <div class="art">
      <img class="view-toggle" src="${art['image']}" alt="${art['name']}"  loading="eager" fetchpriority="high"/>
      <figcaption>
        <h2>${art['name']}</h2>
        <p class="art__description">
          ${art['description']}
        </p>
      </figcaption>
    </div>`;
  } else {
    return `<p>No results, sorry!</p>`;
  }
}


menuToggle.addEventListener('click', () => {
  const navLinks = document.querySelector("nav")
  navLinks.classList.toggle('show');
});

document.querySelectorAll(".gallery img").forEach(img => {
  img.classList.add("view-toggle")
})

function enableViewerToggles() {
  document.querySelectorAll('.view-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const viewerImage = document.querySelector('.viewer-image');
      const viewerCaption = document.querySelector('.viewer-caption');

      viewerImage.src = toggle.src;
      viewerImage.alt = toggle.alt;

      // Optional: use alt as the caption text
      viewerCaption.textContent = toggle.alt || "Buy this art:";

      // Show the viewer
      viewerPopout.classList.add('show');
    });
  });
}


xButton.addEventListener('click', () => {
  viewerPopout.classList.remove('show');
});


function randomArt(artArray){
  console.log(artArray)
  let i = Math.floor(Math.random()*artArray.length)

  return artArray[i]
}

function renderArt(art) {

  const featured = document.querySelector(".featured");

  const artDiv = document.createElement("div");
  artDiv.className = "art"
  artDiv.innerHTML = artTemplate(art)

  if (featured) {
      featured.appendChild(artDiv);
  }
}

function init() {
  const art = randomArt(artGallery);
  console.log(art);

  renderArt(art);            
  enableViewerToggles();     
}


init();
