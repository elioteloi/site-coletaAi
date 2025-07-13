const buttonMap = document.getElementById("maps")
const buttonHome = document.getElementById("home")
const buttonAccount = document.getElementById("account")
const buttonEdit = document.getElementById("edit")
const buttonNGO = document.getElementById("NGO")
const divDescarte = document.getElementById("descarte")


buttonMap.addEventListener("click", () => {
    console.log("map");
    window.location= "/"
})

buttonHome.addEventListener("click", () => {
    console.log("home");

    window.location= "./home.html"
})

buttonNGO.addEventListener("click", () => {
    console.log("NGO");
    window.location= "./ngo.html"

})

buttonEdit.addEventListener("click", () => {
    console.log("edit");

    window.location= "./edit.html"
})

buttonAccount.addEventListener("click", () => {
    console.log("account");

    window.location= "./account.html"
})



