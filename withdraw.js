//mobile num ante hbe > mobilenum must be 11 digit
//pin chk
//withdarw amuount ante hbe => current - withdraw amount => new balance 

document.getElementById('w_btn').addEventListener('click',()=>{
const withdraw_pin=document.getElementById("withdraw_pin").value;

const agent_num=document.getElementById("agent_num").value;

const balance=document.getElementById("cb");
const currentBalance=Number(balance.innerText);



const cashout=Number(document.getElementById("amnt").value);


if(agent_num.length!=11 || withdraw_pin!="1234"){
    alert("Invalid info");
    return;
}
if(currentBalance < cashout){
     alert("Insufficient Balance");
     return;
}


 let new_b=currentBalance-cashout;

alert("Cash_Out Successfully!");


balance.innerText=new_b;    

// history
const history=document.getElementById('history_sec');
const c_history=document.createElement("div");
c_history.innerHTML=`
   <div class=" bg-base-300 shadow-xl rounded-2xl p-2 border border-black m-2">
<p class="m-5">
“Tk ${cashout} debited by Agent_num:${agent_num}”
</p>
  </div>

`
history.appendChild(c_history);
    

}
);