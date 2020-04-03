/*eslint-env browser*/

const addName = document.querySelector('.name');
const addTitle = document.querySelector('.title');
const addExt = document.querySelector('.ext');
const table = document.querySelector('tbody.list');

const search = document.querySelector('.search input');

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
                    // if(name.length || title.length || ext.length){
                    generateTemplate(name, title, ext);
                    addName.reset();
                    addTitle.reset();
                    addExt.reset();
                    // }
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

//keyup event for search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterEmpl(term);
});

//row counter:
let count = document.querySelector('tbody');
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);

let empl = Array.from(count.children).length;
console.log(empl);

let numEmpl = document.querySelector('.table-rows');
numEmpl.querySelector('span').textContent = `${empl}`;

