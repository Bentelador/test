import ben from "./js.js"

const Tab = document.getElementById("table")
const button = document.getElementById("bun")
button.addEventListener("click", async () => {
    const benner = await ben("dune")
    console.log(benner)
})









