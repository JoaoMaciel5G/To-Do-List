const btn = document.getElementById("button")
const title = document.getElementById("title")

btn.addEventListener("click", ()=>{
    const val = title.value
    const keys = Object.keys(localStorage);
    localStorage.setItem(`tarefa ${keys.length+1}`, val)
    title.value = ""
    return
})