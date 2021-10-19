const tableTitle=document.querySelector('#title');
const tableAuthor=document.querySelector('#author');
const tableYear=document.querySelector('#year');
const btn=document.querySelector('.btn');
const bookList=document.querySelector('#bookList');

btn.addEventListener('click',function(e){
    e.preventDefault();
if(tableTitle.value=='' && tableAuthor.value=='' && tableYear.value==''){
    alert("Please fill up the table");
}else{
const tableRow=document.createElement('tr');

const  rowTitle=document.createElement('th');
rowTitle.innerHTML=tableTitle.value;
tableRow.appendChild(rowTitle);

const rowAuthor=document.createElement('th');
rowAuthor.innerHTML=tableAuthor.value;
tableRow.appendChild(rowAuthor);

const rowYear=document.createElement('th');
rowYear.innerHTML=tableYear.value;
tableRow.appendChild(rowYear);

bookList.appendChild(tableRow);

}

});