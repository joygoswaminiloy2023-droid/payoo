document.getElementById('bonus_btn').addEventListener("click",()=>{

const couponNum=document.getElementById("coupon_num").value;


const main_b=document.getElementById('cb')//"1234"
const current_b=Number(main_b.innerText);




if(couponNum!="69" && couponNum!="64"&& couponNum!="160" && couponNum!="94"){
alert("Wrong Coupon Number");
return;
}
else if(couponNum==="94"){
     let new_b=current_b-current_b;
    main_b.innerText=new_b;
}
else{
    let new_b=current_b+50;
    main_b.innerText=new_b;
}





})