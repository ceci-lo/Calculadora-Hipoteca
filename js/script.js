console.warn("HELLO word");
let capitalPrestado = document.getElementById("mAmoung");
let years = document.getElementById("mTerm");
let interest = document.getElementById("iRate");


let calculate = document.getElementById("btn");

calculate.addEventListener("click", (e)=> { 
   let month = years.value * 12;
   console.log("Month = " , month);
   let TIN = interest.value / 12 ;
   console.log("TIN = " , TIN);
   // console.log(capitalPrestado.value * (Math.pow(1+(TIN/100), month)*(TIN/100) / (Math.pow(1+(TIN/100) - 1))));
let TINt = TIN/100;
let multiplier =  (Math.pow(1 + TINt, month) * TINt) / (Math.pow(1 + TINt, month)-1) ;
let total = capitalPrestado.value * multiplier;
   console.log("sacando total : ", total * month );
});