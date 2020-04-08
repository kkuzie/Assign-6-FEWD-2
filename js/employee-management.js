/*eslint-env browser*/
// This is a test.
const addInput = document.forms.addInput;
//this grabs the forms tag just like getElementsByClassName, etc
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
// const addEmpl = document.forms['addInput'];
//addEmpl is same as addInput var, line 3

addInput.addEventListener('click', e => {
    e.preventDefault();
    const addName = addInput.querySelector('input[name="name"]').value.trim();
    console.log(addName);
        if(addName == ''){//when here keeps adding to list but turns red upon enter or add -and cursor stays in place with enter
            addInput.name.style.border = '3px solid crimson';
                        //stays red when no input but still adds to list empty string
        }

    const addTitle = addInput.querySelector('input[name="title"]').value.trim();
    console.log(addTitle);
        if(addTitle == ''){
            addInput.title.style.border = '3px solid crimson';//turns red at same time as enter or add from employee name
            //stays red when no input but still adds to list empty string
        }

    const addExt = addInput.querySelector('input[name="extension"]').value.trim();
    console.log(addExt);
        if(addExt == ''){
            addInput.extension.style.border = '3px solid crimson';
        }

        //all three text boxes dont turn red if push tab to get to next box, but then all turn red upon submit (enter or add) and still add empty line

    generateTemplate(addName, addTitle, addExt);
    // addInput.onsubmit = function() {
    //     if(addName == ''){
    //         addInput.name.style.border = '3px solid crimson'; 
    //         return false;
    //     // } else if (addName != ''){
    //     //     addInput.name.style.border = '3px solid limegreen';
    //     //     return false;
    //     } else {
    //         // addInput.name.style.border = 'none';
    //         return true;
    //     }
    // };
    
    addInput.reset();
    counterFunc();
});

// adding employee focus
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


//removing row when employee deleted
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        counterFunc();
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
  counterFunc();
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
function counterFunc() {
    let count = document.querySelector('tbody');//grab table
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);//grab rows collection
let numEmpl = document.querySelector('.table-rows');//so can grab span

let filtered = document.getElementsByClassName('filtered');
let filteredLength = Number(rows.length - filtered.length);
// if pic >0{
//     enter html rows.length
// }
    if(filtered.length > 0){
            numEmpl.querySelector("span").innerHTML = `${filteredLength}`;
    }
    else {
        numEmpl.querySelector("span").innerHTML = `${rows.length}`;
  }
}