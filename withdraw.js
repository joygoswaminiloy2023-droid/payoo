//mobile num ante hbe > mobilenum must be 11 digit
//pin chk
//withdarw amuount ante hbe => current - withdraw amount => new balance 

document.getElementById('w_btn').addEventListener('click',()=>{
const withdraw_pin=getInput("withdraw_pin");

const agent_num=getInput("agent_num");

const balance=document.getElementById("cb");
const currentBalance=Number(balance.innerText);



const cashout=Number(getInput("amnt"));


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

    historyAdd('history_sec',cashout," " ,agent_num,"Cash_Out");

}
);