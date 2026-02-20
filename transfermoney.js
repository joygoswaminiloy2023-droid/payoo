document.getElementById("transfer_btn").addEventListener("click", ()=>{
const user_num=getInput('user_num');



const transfer_amnt=Number(getInput('transfer_amnt'));


const trans_pin=getInput('transfer_pin');

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

alert("Money Transferred!")
let new_b=current_b-transfer_amnt;
main_b.innerText=new_b;



// history
  historyAdd('history_sec',transfer_amnt," " ,user_num,"Transferred");
  
});