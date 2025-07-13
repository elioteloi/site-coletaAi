const buttonMap = document.getElementById("maps")
const buttonHome = document.getElementById("home")
const buttonAccount = document.getElementById("account")
const buttonEdit = document.getElementById("edit")
const buttonNGO = document.getElementById("NGO")

const ngoPage = document.getElementById("ngoPage")

const params = new URLSearchParams(window.location.search);

const bairro = params.get("bairro");
const associacao = params.get("associacao");
const endereco = params.get("endereco");
const materiais = params.get("materiais");
const descritption = params.get("descritption");


console.log(bairro);
console.log(associacao);
console.log(endereco);
console.log(descritption);

const textBairro = document.createElement("h3")
textBairro.innerHTML = bairro

const textAssociacao = document.createElement("h3")
textAssociacao.innerHTML = associacao

const textEndereco = document.createElement("h3")
textEndereco.innerHTML = endereco

const textMateriais = document.createElement("h3")
textMateriais.innerHTML = materiais
    
const textDescription = document.createElement("p")
textDescription.innerHTML = descritption

ngoPage.appendChild(textBairro)
ngoPage.appendChild(textAssociacao)
ngoPage.appendChild(textMateriais)
ngoPage.appendChild(textEndereco)
ngoPage.appendChild(textDescription)



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