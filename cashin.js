document.getElementById('cashin_btn').addEventListener('click',()=>{
const bank=document.getElementById('bank').value;
if(bank=="Bank"){
       alert("Select A Bank");
       return;
}
console.log(bank);

const AC_num=document.getElementById('account_num').value;
if(AC_num.length!=10){
    alert("Wrong account Number");
    return;

}
    console.log(AC_num);

const cashin_amnt=Number(document.getElementById('cashin_amnt').value);
if(cashin_amnt>50000){
    alert("limit Exceed");
    return;
}
console.log(cashin_amnt)

const cashin_pin=document.getElementById('cashin_pin').value;
console.log(cashin_pin)
if(cashin_pin!="1234"){
    alert("Wrong Pin");
    return;
}
console.log(cashin_pin);

const balance=document.getElementById("cb");
const currentBalance=Number(balance.innerText);

let new_ammount=currentBalance+cashin_amnt;
alert("Cash In Successfully!");

balance.innerHTML=new_ammount;

});