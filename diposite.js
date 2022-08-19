document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositInput = document.getElementById('diposit-input');
    const dipositValue = dipositInput.value;
    const dipositUpdateValue = parseFloat(dipositValue);

    const dipositAmount = document.getElementById('diposit-amount');
    const dipositUpdateAmount = dipositAmount.innerText;
    const updateDipositValue = parseFloat(dipositUpdateAmount);

    const finalWithdrowAmount = dipositUpdateValue + updateDipositValue;
    dipositAmount.innerText = finalWithdrowAmount;

    dipositInput.value = '';

    const totalAmountElement = document.getElementById('total-balance');
    const totalUpdateAmount = totalAmountElement.innerText;
    const updateTotalAmonut = parseFloat(totalUpdateAmount);

    const finalTotalAmount = dipositUpdateValue + updateTotalAmonut;
    totalAmountElement.innerText = finalTotalAmount;
})