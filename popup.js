export var quotation={
    '"':{
        value:'"',
        bool:true
    },
    '`':{
        value:'`',
        bool:true
    },
    "'":{
        value:"'",
        bool:true
    },
    '(':{
        value:')',
        bool:true
    },
    '{':{
        value:'}',
        bool:true
    },
    '<':{
        value:'>',
        bool:true
    },
    '[':{
        value:']',
        bool:true
    }
};
  
const elements=new Set();

if (localStorage.getItem('quotation')) {
    quotation = JSON.parse(localStorage.getItem('quotation'));
  }
  console.log(quotation)

const template=document.getElementById("list_item");
const li=document.querySelector("#list");

for(let i=0;i<Object.keys(quotation).length;i++){
    const element=template.content.firstElementChild.cloneNode(true);
    const p =element.querySelector(".label");
    const check=element.querySelector('input');
    const key=Object.keys(quotation)[i];
    const bool=quotation[key].bool;
    check.checked=bool ? check.checked:!check.checked;
    p.textContent=key;
    check.id=i;
    check.classList.add('check');
    elements.add(element);
}
li.append(...elements);
const check=document.querySelectorAll(".check");

check.forEach(function(element){
    const id=element.id;
    const key=Object.keys(quotation)[id];
    if(element.checked){
        element.addEventListener('change',()=>{
            quotation[key].bool=false;
            localStorage.setItem('quotation', JSON.stringify(quotation));
            quotation = JSON.parse(localStorage.getItem('quotation'));
            console.log(quotation);
        })
    }else if(!element.checked){
        element.addEventListener('change',()=>{
            quotation[key].bool=true;
            localStorage.setItem('quotation', JSON.stringify(quotation));
            quotation = JSON.parse(localStorage.getItem('quotation'));
            console.log(quotation)
        })
        }
    })