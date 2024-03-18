//Gerekli HTML Elementlerini Seç
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
console.log(grocery);

//Düzenleme Seçenekleri
let editFlag = false;

//! Olay İzleyicileri
form.addEventListener("submit", addItem);

//Fonksiyonlar
function addItem(e){
    e.preventDefault(); 
    const value = grocery.value; 
    const id = new Date().getTime().toString();

    if(value !== "" && !editFlag){
        const element = document.createElement("article");
       let attr = document.createAttribute("data-id");
       attr.value = id;
       element.setAttributeNode(attr);
       console.log(element);
    }
}
 