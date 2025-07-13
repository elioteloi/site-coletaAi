const buttonMap = document.getElementById("maps")
const buttonHome = document.getElementById("home")
const buttonAccount = document.getElementById("account")
const buttonEdit = document.getElementById("edit")
const buttonNGO = document.getElementById("NGO")
const divONG = document.getElementById("divONG")

const api = async () => {
    
    const response = await fetch("../index.json")
    
    const json = await response.json()
    
    json.forEach(element => {
        const buttonNGO = document.createElement("button")
        buttonNGO.id = "buttonNGO"
        
        const titleNGO = document.createElement("h2")
        titleNGO.innerHTML = element.associacao

        const pin = document.createElement("img")
        pin.id = "pin"

        pin.src = "/images/pin.png"; 
        pin.alt = "Example Image";
        pin.width = 20;
        pin.height = 20;
        console.log(element.associacao);
        

        buttonNGO.addEventListener("click", () => {
            window.location = `./ngoPage.html?bairro=${element.bairro}&associacao=${element.associacao}&endereco=${element.endereco}&materiais=${element.materiais}&descritption=${element.descritption}`
        })
        buttonNGO.appendChild(pin)
        buttonNGO.appendChild(titleNGO)
        divONG.appendChild(buttonNGO)
    });
    
}

api()


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

