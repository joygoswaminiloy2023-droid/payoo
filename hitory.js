function history(){
const history=document.getElementById('history');
const c_history=document.createElement("div");
c_history.innerHTML=`
   <div class=" bg-base-300 shadow-xl rounded-2xl p-2 border border-black m-2">
<p class="m-5">
“Tk ${cashin_amnt} credited to A/C ${AC_num} from - ${bank} Bank”
</p>
  </div>

`
history.appendChild(c_history);


}