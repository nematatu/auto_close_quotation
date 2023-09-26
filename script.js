function boxToInput(){
    console.log("boxToInput")
}
window.addEventListener('load',auto_quotation());
function auto_quotation(){
const input=document.querySelectorAll('input');
const textbox=document.querySelectorAll('[role="textbox"]')
const textarea=document.querySelectorAll('textarea')

if(textarea){
    console.log("textareaあったよ");
    console.log(textarea);
}
if(textbox){
    console.log("textboxあったよ");
    console.log(textbox);
}
if(input){
    console.log("inputあった");
    console.log(input)
}

// for(let i=0;i<textbox.length;i++){
//     const inputElement=document.createElement("input");
//     inputElement.setAttribute("type","text");
//     inputElement.value=textbox[i].innerText;

//     textbox[i].parentNode.insertBefore(inputElement,textbox.nextSibling);
//     textbox[i].parentNode.removeChild(textbox[0])
// }

for(let i=0;i<textarea.length;i++){
textarea[i].addEventListener("input",function(str){
    console.log("textarea感知した")
    const startPos=textarea[i].selectionStart;
    let input_str=str.data;
    let all_str=str.target.value;
    const len=all_str.length;
    console.log(all_str);
    console.log(str);
    if(input_str==='"'){
        console.log("double quotation is inputted");
        console.log(`startPos: ${startPos}`);
        const before=all_str.substr(0,startPos);
        const after=all_str.substr(startPos,len);
        const right_quotation='"';
        textarea[i].value=before+right_quotation+after;
        const cursor_index=startPos;
        textarea[i].setSelectionRange(cursor_index,cursor_index);
    }
})
}
//inputになにか入力されたときの処理
for(let i=0;i<input.length;i++){
input[i].addEventListener("input",function(str){
    console.log("input感知した")
    const startPos=input[i].selectionStart;
    let input_str=str.data;
    let all_str=str.target.value;
    const len=all_str.length;
    console.log(all_str);
    if(input_str==='"'){
        console.log("double quotation is inputted");
        console.log(`startPos: ${startPos}`);
        const before=all_str.substr(0,startPos);
        const after=all_str.substr(startPos,len);
        const right_quotation='"';
        input[i].value=before+right_quotation+after;
        const cursor_index=startPos;
        input[i].setSelectionRange(cursor_index,cursor_index);
    }
})
}
for(let i=0;i<textbox.length;i++){
textbox[i].addEventListener("input",function(str){
    console.log("textbox感知した");
    let input_str=str.data;
    let all_str=textbox[i].textContent;
    console.log(all_str);
    console.log(str);
    const len=all_str.length-1;
    if(input_str==='"'){
        console.log("double quotation is inputted");
        textbox[i].textContent=textbox[i].textContent+'"';
        textbox[i].focus();
        console.log(len);
        textbox[i].setSelectionRange(2,2);
    }
})
}
}
