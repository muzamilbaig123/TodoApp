"use strict";
// Dom Element 
let todoCont = document.querySelectorAll(".todo-container")[0];
let todoInp = document.querySelectorAll(".todo-container input")[0];
let updateCont = document.querySelectorAll(".update-container")[0];
let updateInp = document.querySelectorAll(".todo-container input")[0];
let printCont = document.querySelectorAll(".print-data")[0];
let storeData = [];
// Create 
function create() {
    let reciveInp = todoInp.value;
    storeData.push(reciveInp);
    read();
    todoInp.value = "";
}
// read
function read() {
    printCont.innerHTML = "";
    for (let i = 0; i < storeData.length; i++) {
        printCont.innerHTML += `
        <p>
            ${storeData[i]}
            <button onclick="edit(${i})">Edit</button>
            <button onclick="deleteFun(${i})">Delete</button>
        </p>
        `;
    }
}
// update
function edit(index) {
    console.log(index);
}
// delete
function deleteFun(index) {
    storeData.splice(index, 1);
    read();
}
