let table_accounting = document.getElementById('table_accounting');


const incomeBtn = document.getElementById('btn1');
const expenditureBtn = document.getElementById('btn2')
const closeModalBtn = document.querySelector('.close-modal-window');
const modalElem = document.querySelector('.modal');
const modalWin = document.querySelector('.modal-window');
const debt = document.querySelector('.debt-btn-l');
const debtli = document.querySelectorAll('li');
const addIncomeBtn = document.querySelector('.add-modal-window');
const expBtn = document.querySelector('.exp-modal-window');
const modalTitle = document.querySelector('.modal-window h2');
const delModelBtn = document.querySelector('.delete-position');
const modalTable = document.querySelector('.modal-table');
const delBtn = document.querySelector('.del-modal-window');
const delWin = document.querySelector('.del-win');



const deletePos = () =>{

}

const incomeAdd = () =>{
    const incomeDate = document.getElementById('modal-date').value;
    var date = incomeDate.split("-").reverse().join("-")
    let incomeFrom = document.getElementById('modal-from').value;
    let incomeType = document.getElementById('modal-type').value;
    let incomeName = document.getElementById('modal-name').value;
    let incomeAmount = document.getElementById('modal-amount').value;
    let incomeId = document.getElementById('modal-id').value;
    if(date === "")date='00-00-0000';
    if(incomeFrom === "")incomeFrom='-';
    if(incomeType === "")incomeType='-';
    if(incomeName === "")incomeName='-';
    if(incomeAmount === "")incomeAmount=0;
    incomeToTable(date, incomeFrom, incomeType, incomeName, incomeAmount, incomeId); 
}

const expenditureAdd = () => {
    const incomeDate = document.getElementById('modal-date').value;
    var date = incomeDate.split("-").reverse().join("-")
    let incomeFrom = document.getElementById('modal-from').value;
    let incomeType = document.getElementById('modal-type').value;
    let incomeName = document.getElementById('modal-name').value;
    let incomeAmount = document.getElementById('modal-amount').value;
    let incomeId = document.getElementById('modal-id').value;
    if(date === "")date='00-00-0000';
    if(incomeFrom === "")incomeFrom='-';
    if(incomeType === "")incomeType='-';
    if(incomeName === "")incomeName='-';
    if(incomeAmount === "")incomeAmount=0;
    expenditureToTable(date, incomeFrom, incomeType, incomeName, incomeAmount, incomeId);
}

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 100ms ease-in;
`;

const openModal = () =>{
    modalWin.innerHTML = '';
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    modalWin.appendChild(modalTitle);
    modalWin.appendChild(modalTable);
    modalWin.appendChild(addIncomeBtn);
    modalWin.appendChild(closeModalBtn);
    modalTitle.innerHTML = 'Доход';
}
const closeModal = event =>{
    const target = event.target;
    if(target === modalElem || target === closeModalBtn){
        modalElem.style.opacity = 0;
        setTimeout(()=>{
            modalElem.style.visibility = 'hidden';
        },100);
    }
}

const openModalExp = () =>{
    modalWin.innerHTML = '';
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    modalWin.appendChild(modalTitle);
    modalWin.appendChild(modalTable);
    modalWin.appendChild(expBtn);
    modalWin.appendChild(closeModalBtn);
    modalTitle.innerHTML = 'Расход';
}

const openModalDel = () =>{
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    modalWin.innerHTML = '';
    modalWin.style.width = '1300px';
    modalWin.appendChild(modalTitle);
    modalTitle.innerHTML = 'Удалить запись';
    modalWin.appendChild(modalTitle);
    modalWin.appendChild(delWin);
    modalWin.appendChild(closeModalBtn);
    modalWin.appendChild(delBtn);
}


delModelBtn.addEventListener('click', openModalDel);
expBtn.addEventListener('click', expenditureAdd);
expenditureBtn.addEventListener('click', openModalExp);
incomeBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalElem.addEventListener('click', closeModal);
addIncomeBtn.addEventListener('click', incomeAdd);


function incomeToTable(date,from,type,name,amount, id){
    let firstRow = table_accounting.firstChild;
    let lastRow = table_accounting.rows.length;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    td1.innerHTML = date;
    td1.style.color = 'black';
    tr.appendChild(td1);
    td2.innerHTML = from;
    td2.style.color = 'black';
    tr.appendChild(td2);
    td3.innerHTML = type;
    td3.style.color = 'black';
    tr.appendChild(td3);
    td4.innerHTML = name;
    td4.style.color = 'black';
    tr.appendChild(td4);
    td5.innerHTML = '+' + amount + ' ₽';
    td5.style.color = 'green';
    tr.appendChild(td5);
    td6.innerHTML = '#'+id;
    
    tr.appendChild(td6);
    let balance = document.getElementById('balance-money')
    balance.innerHTML = parseInt(balance.innerHTML) +  parseInt(amount) + ' ₽' ;
    if(parseInt(balance.innerHTML) >= 0){
        balance.style.color = 'green';
    }
    table_accounting.insertBefore(tr, firstRow);
    table_accounting.deleteRow(lastRow); 
}

function expenditureToTable(date,from,type,name,amount, id){
    let firstRow = table_accounting.firstChild;
    let lastRow = table_accounting.rows.length;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    td1.innerHTML = date;
    td1.style.color = 'black';
    tr.appendChild(td1);
    td2.innerHTML = from;
    td2.style.color = 'black';
    tr.appendChild(td2);
    td3.innerHTML = type
    td3.style.color = 'black';;
    tr.appendChild(td3);
    td4.innerHTML = name;
    td4.style.color = 'black';
    tr.appendChild(td4);
    td5.innerHTML = '-' + amount + ' ₽';
    td5.style.color = 'red';
    tr.appendChild(td5);
    td6.innerHTML = '#'+id;
    tr.appendChild(td6);
    let balance = document.getElementById('balance-money')
    balance.innerHTML = parseInt(balance.innerHTML) -  parseInt(amount) + ' ₽';
    if(parseInt(balance.innerHTML) < 0){
        balance.style.color = 'red';
    }
    table_accounting.insertBefore(tr, firstRow);
    table_accounting.deleteRow(lastRow);
   
}

