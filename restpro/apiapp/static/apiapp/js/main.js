let table_accounting = document.getElementById('table_accounting');


const incomeBtn = document.getElementById('btn1');
const closeModalBtn = document.querySelector('.close-modal-window');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease-in;
`;

const openModal = () =>{
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;  
}

const closeModal = event =>{
    const target = event.target;
    if(target === modalElem || target === closeModalBtn){
        modalElem.style.opacity = 0;
        setTimeout(()=>{
            modalElem.style.visibility = 'hidden';
        },200);
    }
}

incomeBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalElem.addEventListener('click', closeModal);

function  clickClack2(){
    
    expenditureToTable('21.12.2024','Куда то','dopof44442312312312312312312332222222222222222222222222222222222222222222224233333333333333333333333333333333123123','tp',1000);

}

function incomeToTable(date,from,type,name,amount){
    let firstRow = table_accounting.firstChild;
    let lastRow = table_accounting.rows.length;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

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
    td5.style.color = 'mediumseagreen';
    tr.appendChild(td5);
    let balance = document.getElementById('balance-money')
    balance.innerHTML = parseInt(balance.innerHTML) +  parseInt(amount) + ' ₽' ;
    if(parseInt(balance.innerHTML) >= 0){
        balance.style.color = 'green';
    }
    table_accounting.insertBefore(tr, firstRow);
    table_accounting.deleteRow(lastRow);
   
}

function expenditureToTable(date,from,type,name,amount){
    let firstRow = table_accounting.firstChild;
    let lastRow = table_accounting.rows.length;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

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
    td5.style.color = 'indianred';
    tr.appendChild(td5);
    let balance = document.getElementById('balance-money')
    balance.innerHTML = parseInt(balance.innerHTML) -  parseInt(amount) + ' ₽';
    if(parseInt(balance.innerHTML) < 0){
        balance.style.color = 'indianred';
    }
    table_accounting.insertBefore(tr, firstRow);
    table_accounting.deleteRow(lastRow);
   
}

