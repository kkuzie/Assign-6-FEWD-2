/*eslint-env browser*/

const addName = document.querySelector('.name');
const addTitle = document.querySelector('.title');
const addExt = document.querySelector('.ext');

const table = document.querySelector('tbody.list');

const search = document.querySelector('.search input');

let count  = document.querySelector(".table");
let totalRowCount = 0;
let rowCount = 0;


// const formHeader = document.querySelector('.add-input');
// const count = document.querySelector('.count');

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

addName.addEventListener('submit', e => {
    e.preventDefault();
    const name = addName.name.value.trim();
    console.log(name);

        addTitle.addEventListener('submit', e => {
            e.preventDefault();
            const title = addTitle.title.value.trim();
            console.log(title);

                addExt.addEventListener('submit', e => {
                    e.preventDefault();
                    const ext = addExt.extension.value.trim();
                    console.log(ext);

// this needs to be fixed
                    if(name.length || title.length || ext.length){
                    generateTemplate(name, title, ext);
                    addName.reset();
                    addTitle.reset();
                    addExt.reset();
                    }
                });
        });
});
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
});


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
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterEmpl(term);
});


// formHeader.addEventListener('submit', e => {
//     e.preventDefault();
// }) 
//     //need to add way to add # of employees in list
//     let emplCount = 0;
//     const addedEmpl = [formHeader.name.value, formHeader.title.value, formHeader.extension.value];

//     addedEmpl.forEach((input, index) => {

//     });

//row counter
function CountRows() {
    // let totalRowCount = 0;
    // let rowCount = 0;
    // let count  = document.querySelector(".table");
    console.log(count);

    let rows = count.getElementsByTagName("tr")
        for (let i = 0; i < rows.length; i++) {
            totalRowCount++;
                if (rows[i].getElementsByTagName("td").length > 0 && rows[i].getElementsByTagName('th').length > 0) {
                rowCount++;
            }
        console.log(rows);
    }

    // let message = rowCount;
    // console.log(message);

//show # employees
    // count.querySelector('span').textContent = `${message}`;
}
CountRows();
let message = rowCount;
console.log(message);
//need to figure out how to increase row count when employee added
//and decrease row count when employee deleted


count.querySelector('span').textContent = `${message}`;

