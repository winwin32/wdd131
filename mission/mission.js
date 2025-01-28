const themeSelector = document.querySelector(".dropdown")
console.log(themeSelector.value)
function changeTheme() {
    const logo = document.getElementById("logo")
    const page_body = document.getElementById("page_body")
    if (themeSelector.value == "dark"){
        logo.src = "byui-logo_white.png"
        page_body.classList.add("dark")
    }
    else {
        logo.src = "logo.png"
        page_body.classList.remove("dark")
    }
}

themeSelector.addEventListener('change', changeTheme);