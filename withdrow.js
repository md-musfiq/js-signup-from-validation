document.getElementById("btnHome").onclick = function () {
    location.href = "./index.html";
};

document.getElementById('btn-withdrow').addEventListener('click', function(){
    const widthdrawInput = document.getElementById('withdrow-input');
    const withdrawValue = widthdrawInput.value;
    const withdrawUpdateValue = parseFloat(withdrawValue);

    const withdrawAmount = document.getElementById('withdrow-amount');
    const withdrawUpdateAmount = withdrawAmount.innerText;
    const updatewithdrawValue = parseFloat(withdrawUpdateAmount);

    const finalWithdrowAmount = withdrawUpdateValue + updatewithdrawValue;
    withdrawAmount.innerText = finalWithdrowAmount;

    widthdrawInput.value = '';

    const totalAmountElement = document.getElementById('total-balance');
    const totalUpdateAmount = totalAmountElement.innerText;
    const updateTotalAmonut = parseFloat(totalUpdateAmount);

    const finalTotalAmount = updateTotalAmonut - withdrawUpdateValue;
    totalAmountElement.innerText = finalTotalAmount;

    console.log(withdrawUpdateValue)
})