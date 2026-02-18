function showAdd() {
    add_m.classList.remove('hidden');
    withdraw_m.classList.add('hidden');
     transfer_m.classList.add("hidden");
}

function showWithdraw() {
    withdraw_m.classList.remove('hidden');
    add_m.classList.add('hidden');
    transfer_m.classList.add("hidden");
}

function showtransfer(){
    transfer_m.classList.remove("hidden");
     add_m.classList.add('hidden');
      withdraw_m.classList.add('hidden');
}