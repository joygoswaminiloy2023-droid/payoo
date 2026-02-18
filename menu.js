function showAdd() {
    add_m.classList.remove('hidden');
    withdraw_m.classList.add('hidden');
     transfer_m.classList.add("hidden");
         getbonus_m.classList.add('hidden');
}

function showWithdraw() {
    withdraw_m.classList.remove('hidden');
    add_m.classList.add('hidden');
    transfer_m.classList.add("hidden");
        getbonus_m.classList.add('hidden');
}

function showtransfer(){
    transfer_m.classList.remove('hidden');
     add_m.classList.add('hidden');
      withdraw_m.classList.add('hidden');
        getbonus_m.classList.add('hidden');
}

function showgetbonus(){
    getbonus_m.classList.remove('hidden');
     transfer_m.classList.add('hidden');
     add_m.classList.add('hidden');
      withdraw_m.classList.add('hidden');
}