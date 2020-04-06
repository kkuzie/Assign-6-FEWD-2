/*eslint-env browser*/

const addInput = document.forms.addInput;//this grabs the forms tag just like getElementsByClassName, etc

// const addName = document.querySelector('.name');
// const addTitle = document.querySelector('.title');
// const addExt = document.querySelector('.ext');
const table = document.querySelector('tbody.list');

const search = document.querySelector('.search input');

//template to add new row when employee info added
const generateTemplate = ((name, title, ext) => {
    const html = `
    <tr>
        <th scope="row">${name}</th>
       <td>${title}</td>
        <td>${ext}</td>      
        <td>
            <i class="far fa-trash-alt delete"></i>
        </td>
    </tr>
`;

    table.innerHTML += html;
});

// //adding employee info
const addEmpl = document.forms['addInput'];

addEmpl.addEventListener('submit', e => {
    e.preventDefault();
    const addName = addEmpl.querySelector('input[name="name"]').value.trim();
    // const name = addName.name.value.trim();
    console.log(addName);

// addEmpl.addEventListener('submit', e => {
//     e.preventDefault();
    const addTitle = addEmpl.querySelector('input[name="title"]').value.trim();
    // const name = addName.name.value.trim();
    console.log(addTitle);

// addEmpl.addEventListener('submit', e => {
//     e.preventDefault();
    const addExt = addEmpl.querySelector('input[name="extension"]').value.trim();
    // const name = addName.name.value.trim();
    console.log(addExt);
    generateTemplate(addName, addTitle, addExt);
    addEmpl.reset();
    myFunction();
// });
// });
});
//         addTitle.addEventListener('submit', e => {
//             e.preventDefault();
//             const title = addTitle.title.value.trim();
//             console.log(title);

//                 addExt.addEventListener('submit', e => {
//                     e.preventDefault();
//                     const ext = addExt.extension.value.trim();
//                     console.log(ext);

// // this needs to be fixed
//                     // if(name.length || title.length || ext.length){
                    // generateTemplate(name, title, ext);
//                     addName.reset();
//                     addTitle.reset();
//                     addExt.reset();
//                     myFunction();
//                     // }
//                 });
//         });
// });

//adding employee - try 2 (above works but not quite right)
addInput.name.onfocus = function(){
    addInput.name.style.border = '3px solid limegreen'; 
};
addInput.name.onblur = function(){
    addInput.name.style.border = 'none';
}
addInput.title.onfocus = function(){
    addInput.title.style.border = '3px solid limegreen'; 
};
addInput.title.onblur = function(){
    addInput.title.style.border = 'none';
}
addInput.extension.onfocus = function(){
    addInput.extension.style.border = '3px solid limegreen'; 
};
addInput.extension.onblur = function(){
    addInput.extension.style.border = 'none';
}


//onsubmit event
addEmpl.onsubmit = function() {
    if(addEmpl.name.value == ''){
        addEmpl.name.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
    
};
addEmpl.onsubmit = function() {
    if(addEmpl.title.value == ''){
        addEmpl.title.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
};
addEmpl.onsubmit = function() {
    if(addEmpl.extension.value == ''){
        addEmpl.extension.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
};
// generateTemplate(name, title, ext);


//removing row when employee deleted
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        myFunction();
    }
});

//add & remove filtered class
const filterEmpl = (term) => {
    Array.from(table.children)
        .filter((empl) => {
            return !empl.textContent.toLowerCase().includes(term);
        })
        .forEach((empl) => empl.classList.add('filtered'));//this is the same as writing like 74 just shorthand

Array.from(table.children)
.filter((empl) => {
    return empl.textContent.toLowerCase().includes(term);
})
.forEach((empl) => empl.classList.remove('filtered'));
  myFunction();
};
     
//keyup event for search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterEmpl(term);
  
});

//row counter:
let count = document.querySelector('tbody');//grab table
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);//grab rows collection

let empl = Array.from(count.children).length;
console.log(empl);//change table to array and give length

let numEmpl = document.querySelector('.table-rows');//so can grab span
console.log(numEmpl);

    numEmpl.querySelector('span').textContent = `${rows.length}`;//shows number of row in browser

//try try again - row counter:
//taken from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_nodelist_length_p
function myFunction() {
    let count = document.querySelector('tbody');//grab table
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);//grab rows collection
let numEmpl = document.querySelector('.table-rows');//so can grab span


    numEmpl.querySelector("span").innerHTML = `${rows.length}`;
  }




//vlad info
// function countEmployees () {
//     let length = rows.length;

    // numEmpl.querySelector('span').textContent = `${rows.length}`;//shows number of row in browser

    // $('h2 span').text(length)
    // console.log('count was called')
    // console.log(length)
// }
// countEmployees();
// console.log(length);

//another try:
// let i = 0;
// let sumRows = 0;
// while (i < empl){
//     sumRows = rows.length;
//     i++;
// }
// console.log(sumRows);
// numEmpl.querySelector('span').textContent = `${sumRows}`;//shows number of row in browser

//almost there
// let i = 0;
// let sumRows = 0;
// while (i < empl){
//     sumRows += empl;
//     i++;
//     numEmpl.querySelector('span').textContent = `${sumRows}`;//shows number of row in browser
// }
// console.log(sumRows);
// console.log(rows);
// console.log(i);

// var table = document.getElementById("priceTable");

// var i = 1;
// var sum = 0;
// while (i < table.rows.length) {
//     sum += parseFloat(table.rows[i].cells[2].innerHTML)
//     i++;
// }

// var row = table.insertRow(i);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);

// cell2.innerHTML = "Total Price";
// cell3.innerHTML = sum;