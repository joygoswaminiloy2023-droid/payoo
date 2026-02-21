function getInput(id){
    const inputvalue=document.getElementById(id).value;
    return inputvalue;
}



function getInnerTxt(id){
    const getInput=document.getElementById(id);
    const innertxt=getInput.innerText;
    return innertxt;
}




function historyAdd(id,value_1,value_2,value_3,type){
  const history=document.getElementById(id);
const c_history=document.createElement("div");
 c_history.innerHTML=`
   <div class=" bg-primary text-white  shadow-white shadow-xl rounded-2xl p-2 border border-cyan-300 m-2 hover:bg-base-200 hover:text-black hover:border-primary transition-all duration-300">
<p class="m-5">
“Tk ${value_1} ${type} to A/C ${value_2} from - ${value_3}  at - ${new Date()}”
</p>
  </div>

`
history.appendChild(c_history);

}


function show(id,btn_id){
    add_m.classList.add('hidden');
    transfer_m.classList.add("hidden");
        getbonus_m.classList.add('hidden');
          bill_m.classList.add('hidden');
                history_sec.classList.add('hidden');
                 withdraw_m.classList.add('hidden');  

   A_BTN.classList.remove('bg-primary','text-white');
   C_BTN.classList.remove('bg-primary','text-white');
   T_BTN.classList.remove('bg-primary','text-white');
   G_BTN.classList.remove('bg-primary','text-white');
   P_BTN.classList.remove('bg-primary','text-white');
   TR_BTN.classList.remove('bg-primary','text-white');
              
                 
                  document.getElementById(id).classList.remove('hidden');
                  document.getElementById(btn_id).classList.add('bg-primary','text-white')

      
                 

                
}



