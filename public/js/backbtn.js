const { backtoall } = document.forms
const div = document.querySelector(".BackBtn")
const backMyLists = document.querySelector(".BackToMyListsBtn")

div.addEventListener("click", async (e) => {
    e.preventDefault()
    // const data = new FormData(ol)
    if(e.target.classList.contains("BackBtn")){
        console.log("button pressed")
        window.location.href = `/alllists/`
    }
})

backMyLists.addEventListener("click", async (e) => {
    e.preventDefault()
    if(e.target.classList.contains("BackToMyListsBtn")){
        console.log("button pressed")
        window.location.href = `/mylists/`
    }
})