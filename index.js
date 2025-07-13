const buttonMap = document.getElementById("maps")
const buttonHome = document.getElementById("home")
const buttonAccount = document.getElementById("account")
const buttonEdit = document.getElementById("edit")
const buttonNGO = document.getElementById("NGO")

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


async function maps(params) {
    const response = await fetch("./index.json")
    const data = await response.json();
    console.log(data);
    data.forEach(element => {
        
        
        L.marker([element.latitude, element.longitude]).addTo(map)
        .bindPopup(`<h4>${element.bairro}</h4> <h4>${element.associacao}</h4> <h4>${element.endereco}</h4>  <a href="./pages/ngoPage.html?bairro=${element.bairro}&associacao=${element.associacao}&endereco=${element.endereco}&materiais=${element.materiais}&descritption=${element.descritption}">Saber mais</a> `)
            .openPopup();
    });
}

maps()

buttonMap.addEventListener("click", () => {
    console.log("map");
    window.location= "/"

})

buttonHome.addEventListener("click", () => {
    console.log("home");
    
    window.location= "/pages/home.html"
})

buttonNGO.addEventListener("click", () => {
    console.log("ngo");
    window.location= "/pages/ngo.html"

})

buttonEdit.addEventListener("click", () => {
    console.log("edit");
    
    window.location= "/pages/edit.html"
})

buttonAccount.addEventListener("click", () => {
    console.log("settings");
    
    window.location= "/pages/account.html"
})

