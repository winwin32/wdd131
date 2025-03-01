let count = 1
import {tempHtml} from "./templates.js"

function participantTemplate(){
    count++
    const addButton = document.getElementById("add")
    const html = tempHtml

    addButton.insertAdjacentHTML("beforebegin", html)
    
}

function submitForm(event) {
    event.preventDefault()
    fees = totalFees()
    let adult = document.getElementById("adult_name")
    let form = document.getElementById("registerForm")
    form.style.display = "none"
    let summary = document.getElementById("summary")

    summary.innerHTML = `Thank you ${adult.value} for registering. You have registered ${count} participants and owe $${fees} in Fees.`
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]")
    feeElements = [...feeElements] 
    return feeElements.reduce((acc, el) => acc + (Number(el.value) || 0), 0)
}

document.getElementById("add").addEventListener("click", participantTemplate)
document.getElementById("submitButton").addEventListener("click", submitForm)