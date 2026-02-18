//mobile num ante hbe > mobilenum must be 11 digit
//pin chk
//withdarw amuount ante hbe => current - withdraw amount => new balance 

document.getElementById('w_btn').addEventListener('click',()=>{
const withdraw_pin=document.getElementById("withdraw_pin").value;

const agent_num=document.getElementById("agent_num").value;

const balance=document.getElementById("cb");
const currentBalance=Number(balance.innerText);



const cashout=Number(document.getElementById("amnt").value);
console.log(typeof(cashout), cashout);

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
    

}
);