const passwd = document.getElementById("passwd")
const openEye = document.getElementById("open-eye")
const closedEye = document.getElementById("closed-eye")

openEye.addEventListener("click", ()=>{
    openEye.classList.toggle("active")
    closedEye.classList.remove("active")
    passwd.type = "text"
})
closedEye.addEventListener("click", ()=>{
    closedEye.classList.toggle("active")
    openEye.classList.remove("active")
    passwd.type = "password"
})
