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


// history
const history=document.getElementById('history_sec');
const c_history=document.createElement("div");
c_history.innerHTML=`
   <div class=" bg-base-300 shadow-xl rounded-2xl p-2 border border-black m-2">
<p class="m-5">
"Tk ${b_amnt} paid for ${billtype} from A/C ${ba}."

</p>
  </div>

`
history.appendChild(c_history);

});
