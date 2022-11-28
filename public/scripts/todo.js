const val = Object.values(localStorage)
const lista = document.getElementById("list")

val.map((item)=>{
    const sla = `<div class="task">
        <li>${item}</li>
        <div class="icons">
            <i class="fa-solid fa-trash"></i>
            <i class="fa-regular fa-square-check"></i> 
        </div>
    </div>`
    lista.insertAdjacentHTML("beforeend", sla)
    return
})