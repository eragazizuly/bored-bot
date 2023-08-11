const btnEl = document.getElementById("generate-activity")
const divEl = document.getElementById("placeholder")
btnEl.addEventListener("click", function() {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            divEl.replaceChildren()
            const placeholder = document.createElement("h4")
            placeholder.textContent = data.activity
            divEl.appendChild(placeholder)
        })
})

