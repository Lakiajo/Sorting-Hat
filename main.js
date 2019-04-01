console.log('Lakia Jones')

const students = [];
const houses = [
    'Gryffindor',
    'Hufflepuff',
    'Slytherin',  
    'Ravenclaw',
];

const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
}

const expelledStudents = [];
let studentCounter = 1;

const hideInputForm = () => {
document.getElementById('hiddenInput').style.display = 'none';
};

const showInputForm = () => {
document.getElementById('hiddenInput').style.display = 'block';
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for(let l=0; l<deleteButtons.length; l++){
        deleteButtons[l].addEventListener('click',deleteFunction);
    }
};
const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    students.forEach((student) => {
        domString += `<div class="card col-3 mt-1 mb-2">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${student.name}</h5>`;
        domString += `<h5 class="card-title">${student.house}</h5>`;
        domString += `<a class="btn btn-primary deleteButton" id="${student.id}">Expel</a>`;
        domString += `</div>`;
        domString += `</div>`;
    });
   printToDom('sortedStudents',domString);
}

const addStudent = (e) => {
    e.preventDefault();
   const inputName = document.getElementById('inputName').value;
   const newName = {
       name: inputName,
       id:`student${studentCounter}`,
   };
   students.push(newName);
   studentCounter++;

domStringBuilder(students);
inputName.value='';
addDeleteEvents();
};

const deleteFunction = (e) => {
    console.log(e.currentTarget);
    const buttonId = e.target.id;
    students.forEach((student,index)=> {
        if (student.id===buttonId){
            students.splice(index,1)
        }
    })
    domStringBuilder(students);
};

const eventListener = () => {
    document.getElementById('startSorting').addEventListener('click', showInputForm);
    document.getElementById('sortBtn').addEventListener('click', addStudent);
  };
  
const init = () => {
    hideInputForm();
    eventListener();
};
init();