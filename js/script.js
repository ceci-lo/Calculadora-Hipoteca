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
mostrarAviso();
  if (radioRepayment.checked) {
    console.log("repayment : ", repayment);
  } else if (radioInterestOnly.checked) {
    console.log("Intertest Only : ", interestOnly);
  }
});

function mostrarAviso() {
  let oldTitle = document.getElementsByClassName("container2__results_title")[0];
  let oldP = document.getElementsByClassName("container2__results_p")[0];
  let img = document.getElementsByClassName("container2__results__img")[0];

  img.remove();
  oldTitle.innerText = "Your results";
  oldP.innerText =
    'Your results shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again';

    //Estilos
   // Titulo 

   oldTitle.style.textAlign = "left";
   oldP.style.textAlign = "left";
   oldP.style.padding = "0px 3px";


}

function mostrarResultado() {}
