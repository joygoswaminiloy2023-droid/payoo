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
   <div class=" bg-base-300 shadow-xl rounded-2xl p-2 border border-black m-2">
<p class="m-5">
“Tk ${value_1} ${type} to A/C ${value_2} from - ${value_3}  at - ${new Date()}”
</p>
  </div>

`
history.appendChild(c_history);

}


function show(id,class_b){
    add_m.classList.add('hidden');
    transfer_m.classList.add("hidden");
        getbonus_m.classList.add('hidden');
          bill_m.classList.add('hidden');
                history_sec.classList.add('hidden');
                 withdraw_m.classList.add('hidden');  
                 
                  document.getElementById(id).classList.remove('hidden');
                 
    btn.classList.remove("bg-primary","text-white");
      
    

    

       document.getElementsByClassName(class_b).classList.add("bg-primary", "text-white");
                
           
         


}

