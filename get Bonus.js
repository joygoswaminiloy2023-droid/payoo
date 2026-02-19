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
// history
const history=document.getElementById('history_sec');
const c_history=document.createElement("div");
c_history.innerHTML=`
   <div class=" bg-base-300 shadow-xl rounded-2xl p-2 border border-black m-2">
<p class="m-5">
“Tk 50 credited ”
</p>
  </div>

`
history.appendChild(c_history);



})