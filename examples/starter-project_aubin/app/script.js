const input = document.getElementById("name");
const greeting = document.getElementById("greeting");
const tooltip = document.getElementById("tooltip");

document.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        if(input.value && input.value.length > 0) {
            input.classList.add("hidden");
            tooltip.classList.add("hidden");
            greeting.innerHTML = `Hi ${input.value}! Nice to meet you!`;
        }else {
            tooltip.innerHTML = "Please enter your name!";
        }
    }
})