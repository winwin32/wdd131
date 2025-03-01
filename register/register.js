let count = 1

function participantTemplate(){
    count++
    const addButton = document.getElementById("add")
    const html = `<p>Participant ${count}</p>
    <div class="item">
          <label for="fname"> First Name<span>*</span></label>
          <input id="fname" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
          <label for="activity">Activity #<span>*</span></label>
          <input id="activity" type="text" name="activity" />
        </div>
        <div class="item">
          <label for="fee">Fee ($)<span>*</span></label>
          <input id="fee" type="number" name="fee" />
        </div>
        <div class="item">
          <label for="date">Desired Date <span>*</span></label>
          <input id="date" type="date" name="date" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>`

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