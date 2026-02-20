document.getElementById("login_btn").addEventListener('click',()=>{

// const mbl=document.getElementById('mbl_num').value;
// const pass=document.getElementById('login_pin').value;

const mbl=getInput('mbl_num');
const pass=getInput('login_pin');

if(mbl.trim()==="01727898421" && pass.trim()==="1234"){
    alert("Logged in Successfully!");
    window.location.assign('home.html');

}
else if(mbl.trim()===""|| pass.trim()===""){
       alert("Insert MobileNumber & Password");
}
else{
    alert("Invalid pin or number");
    return;
}

});



