console.warn("HELLO word");
let capitalPrestado = document.getElementById("mAmoung");
let years = document.getElementById("mTerm");
let interest = document.getElementById("iRate");
let radioRepayment = document.getElementById("repayment");
let radioInterestOnly = document.getElementById("InterestOnly");

let calculate = document.getElementById("btn");

calculate.addEventListener("click", (e) => {
  let month = years.value * 12;
  let TIN = interest.value / 12;
  let TINt = TIN / 100;
  let multiplier =
    (Math.pow(1 + TINt, month) * TINt) / (Math.pow(1 + TINt, month) - 1);
  let total = capitalPrestado.value * multiplier;

  let repayment = Math.round(total);
  let interestOnly = Math.round(
    (repayment * month - capitalPrestado.value) / 360
  );

  if (radioRepayment.checked) {
    console.log("repayment : ", repayment);
    console.log("radio repayment : ", radioRepayment.checked);
  } else if (radioInterestOnly.checked) {
    console.log("Intertest Only : ", interestOnly);
  }
});
