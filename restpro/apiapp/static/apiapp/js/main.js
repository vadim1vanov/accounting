let table_accounting = document.getElementById('table_accounting');

function  clickClack(){
    
    addToTable('20.02.2023','Откуда то','dopof12312312312312312312312312332222222222222222222222222222222222222222222224233333333333333333333333333333333123123','zp',2000);

}

function addToTable(date,from,type,name,amount){
    let firstRow = table_accounting.firstChild;
    let lastRow = table_accounting.rows.length;
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    td1.innerHTML = date;
    tr.appendChild(td1);
    td2.innerHTML = from;
    tr.appendChild(td2);
    td3.innerHTML = type;
    tr.appendChild(td3);
    td4.innerHTML = name;
    tr.appendChild(td4);
    td5.innerHTML = amount+' ₽';
    tr.appendChild(td5);
    let balance = document.getElementById('balance-money')
    balance.innerHTML = parseInt(balance.innerHTML) +  parseInt(amount) ;
    
    table_accounting.insertBefore(tr, firstRow);
    table_accounting.deleteRow(lastRow);
   
}
