let msgEle = document.getElementById("msg");
let saveBtnEle = document.getElementById("saveBtn");
let clearBtnEle = document.getElementById("clearBtn");
let storageKey = "userInput";
let storageVal = localStorage.getItem(storageKey);

if(storageVal !== null){
   msgEle.value = storageVal;
} else{
    msgEle.value = "";
}

saveBtnEle.onclick = function(){
    let inputValue = msgEle.value ;
    localStorage.setItem(storageKey,inputValue);

}
clearBtnEle.onclick = function(){
    msgEle.value = '';
    localStorage.removeItem(storageKey);
}