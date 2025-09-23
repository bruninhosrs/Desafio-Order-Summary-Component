const payBtn = document.querySelector("#payBtn");
const cancelBtn = document.querySelector("#cancelBtn");

function handlePay() {
  console.log(`Você quer avançar para o pagamento!`);
}

function handleCancel() {
    console.log(`Você quer cancelar o plano!`)
}

payBtn.addEventListener("click", handlePay);
cancelBtn.addEventListener("click", handleCancel);
