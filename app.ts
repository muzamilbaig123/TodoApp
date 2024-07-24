// Dom Element 
let todoCont = document.querySelectorAll(".todo-container")[0];
let todoInp = document.querySelectorAll(".todo-container input")[0] as HTMLInputElement;
let updateCont = document.querySelectorAll(".update-container")[0];
let updateInp = document.querySelectorAll(".update-container input")[0] as HTMLInputElement;
let printCont = document.querySelectorAll(".print-data")[0];
let storeData: string[] = [];
let currentIndex = -1;


// Create     ___1____
function create () {
    let reciveInp = todoInp.value;
    storeData.push(reciveInp);
    read()
    todoInp.value = "";
}


// read       _____2____
function read () {
    printCont.innerHTML = "";
    for(let i = 0; i < storeData.length; i++){
        printCont.innerHTML += `
        <p>
            ${storeData[i]}
            <button onclick="edit(${i})">Edit</button>
            <button onclick="deleteFun(${i})">Delete</button>
        </p>
        `
    }
}



// update       _____4_____
function edit(index: number) {
    toggleTodo()
    currentIndex = index
    updateInp.value = storeData[index]
}



// _____5_______
let isEditing: boolean = false;
function toggleTodo () {
    
    if(!isEditing){
        todoCont.className += " hide";
        updateCont.className = "";
    }
    else{
        todoCont.className = "";
        updateCont.className += " hide";
    }
    isEditing = !isEditing;
}

// save _____6_____

function save (ind: number) {
    toggleTodo()
    storeData[currentIndex] = updateInp.value
    read()

}


// delete       _____3_____
function deleteFun(index: number) {
    storeData.splice(index, 1)
    read()
}




// codepen
