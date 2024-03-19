//Gerekli HTML Elementlerini Seç
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");

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
       element.classList.add("grocery-item");
       element.innerHTML = `
       <p class="title">${value}</p>
       <div class="btn-container">
           <button type="button" class="edit-btn"><i class="fa-solid fa-pen-to-square"></i>
           </button>
           <button type="button" class="delete-btn">
               <i class="fa-solid fa-trash-can"></i>
           </button>
       </div>

       `;
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        list.appendChild(element);
    }
}
 
function deleteItem(){
    console.log("silindi");
}

function editItem(){
    console.log("düzenleme işlemi");
}