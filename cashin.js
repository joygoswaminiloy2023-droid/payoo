

document.getElementById('cashin_btn').addEventListener('click',()=>{

    const AC_num=document.getElementById('account_num').value;
const bank=getInput('bank');
const cashin_amnt=Number(getInput('cashin_amnt'));
const cashin_pin=getInput('cashin_pin');


if(bank=="Bank"){
       alert("Select A Bank");
       return;
}
console.log(bank);


if(AC_num.length!=10){
    alert("Wrong account Number");
    return;

}
    console.log(AC_num);


if(cashin_amnt>50000){
    alert("limit Exceed");
    return;
}
console.log(cashin_amnt)


console.log(cashin_pin)
if(cashin_pin!="1234"){
    alert("Wrong Pin");
    return;
}
console.log(cashin_pin);

const currentBalance=Number(getInnerTxt('cb'));

let new_ammount=currentBalance+cashin_amnt;
alert("Cash In Successfully!");

document.getElementById('cb').innerText=new_ammount;
// historyAdd

    historyAdd('history_sec',cashin_amnt,AC_num ,bank,"Credited");


});