const payBtn = document.querySelector("#payBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const changeLink = document.querySelector("a");

function handlePay() {
  console.log(`Você quer avançar para o pagamento!`);
}

function handleCancel() {
  console.log(`Você quer cancelar o plano!`);
}

function handleChange(e) {
  e.preventDefault();
  console.log(`Você quer mudar o seu plano!`);
}

payBtn.addEventListener("click", handlePay);
cancelBtn.addEventListener("click", handleCancel);
changeLink.addEventListener("click", handleChange);
