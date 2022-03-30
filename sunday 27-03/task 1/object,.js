"use strict";

let formMob= document.getElementById("mobForm");
let tableBody=document.getElementById("boadTa");
let arry=[];

function storeInLocalStorage(){
    let stringArray=JSON.stringify(arry);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
   

    let toObj=JSON.parse(dataObj);
    console.log(toObj);
    if(toObj != null){
        arry=toObj;
        
    }
   renderAdd(); 
}
callFromLocalStorage();
function User(useName,phone){
    this.useName=useName;
    this.phone=phone;
    this.price=priceP(50,200);
    this.conditon=con();
      

    arry.push(this);
    renderAdd();
    storeInLocalStorage();
    console.log(arry);
}

function priceP(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function con() {
    let price=User.price;
    if (price <= 100) {
        return 'use phone';
    } 
    else {
        return 'new phone';
    }
}


formMob.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    console.log(event.target,'rrrr');
    let useName=event.target.useName.value;
    let phone=event.target.typeNameD.value;
  

    new User(useName,phone);
    console.log(User);
   

 }
//  handleSubmit();

 
 function renderAdd() {
    
    tableBody.textContent=' ';
  
    for (let i = 0; i < arry.length; i++) {
        let trE = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
      tableBody.appendChild(trE);
      trE.appendChild(td1);
      trE.appendChild(td2);
      trE.appendChild(td3);
      trE.appendChild(td4);
  
      td1.textContent = arry[i].useName;
      td2.textContent = arry[i].phone;
      td3.textContent = arry[i].price;
      td4.textContent = arry[i].conditon;
    }
   
  }

