document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const incomeInput = document.getElementById("income");
    const expensesInput = document.getElementById("expenses");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const income = parseFloat(incomeInput.value);
        const expenses = parseFloat(expensesInput.value);

        if (isNaN(income) || isNaN(expenses)) {
            resultElement.textContent = "Invalid Entry";
        } else {
            const profit = income - expenses;
            resultElement.textContent = "Profit: $" + profit.toFixed(2);
        }
    });
});
