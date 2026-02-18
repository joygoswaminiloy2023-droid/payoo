document.getElementById("transfer_btn").addEventListener("click", ()=>{
const user_num=document.getElementById('user_num').value;
console.log(user_num);


const transfer_amnt=Number(document.getElementById('transfer_amnt').value);
console.log(transfer_amnt);

const trans_pin=document.getElementById('transfer_pin').value;
console.log(trans_pin);

const main_b=document.getElementById('cb');
const current_b=Number(main_b.innerText);

if(user_num.trim()===""||transfer_amnt===""|| trans_pin===""){
    alert("Field is empty");
    return;
}

if(user_num.length!=11){
    alert("Invalid Phn Number!");
     return;
}
else if(transfer_amnt>45000){
    alert("Insufficiant Blanace!");
     return;
}
else if(trans_pin!="1234"){
    alert("wrongpin");
     return;
}


let new_b=current_b-transfer_amnt;
main_b.innerText=new_b;


});