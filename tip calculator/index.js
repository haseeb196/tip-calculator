const billamount = document.getElementById("bill-amount");
const tipamount = document.getElementById("tip-amount");
const numberofpeoplediv = document.getElementById("number-of-people");
const totaldiv = document.getElementById("perPersonTotal");


let numberofpeople = Number(numberofpeoplediv.innerText);


const calculatebill = () => {
   let bill = Number(billamount.value);

  let tippercent = Number(tipamount.value) / 100;




  let tipAmount = bill * tippercent;
  
 let total = tipAmount + bill;
 let totalperperson = total / numberofpeople;

 totaldiv.innerText = `$${totalperperson.toFixed(2)}`

};

const increaseperson = () => {
   numberofpeople += 1;
  numberofpeoplediv.innerText = numberofpeople;
   calculatebill();
}
const decreaseperson = () => {
   if(numberofpeople <= 1) return;

   numberofpeople -= 1;
   numberofpeoplediv.innerText = numberofpeople;
    calculatebill();
}

