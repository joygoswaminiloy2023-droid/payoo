document.getElementById('bill_btn').addEventListener("click",()=>{
const billtype=document.getElementById("bill_type").value
const ba=document.getElementById('B_account_num').value;
   
const b_amnt=document.getElementById('bill_amnt').value;


const main_b=document.getElementById('cb');
const current_balance=Number(main_b.innerText);
console.log(current_balance)

const bill_pin=document.getElementById("bill_pin").value;



if(billtype==="Pay Bill"){
    alert("Please  Select Bill Type!");
    return;
}
else if(ba.length!=11){
    alert("Wrong Account Number");
    return;
 
}
else if(b_amnt>current_balance){
    alert("Insufficient Balance");
    return;
}
else if(bill_pin!="1234"){
     alert("Wrong Pin");
    return;

}

else{
    let new_b=current_balance-b_amnt;
    main_b.innerText=new_b;
}

alert("Bill successfully Payed ")
// history

    historyAdd('history_sec',b_amnt,ba," ",billtype);

});
