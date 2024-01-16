let table_accounting = document.getElementById('table_accounting');

function  clickClack(){
    
    incomeToTable('20.02.2023','Откуда то','dopof12312312312312312312312312332222222222222222222222222222222222222222222224233333333333333333333333333333333123123','zp',2000);

}

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

