document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid values for weight and height.';
            resultDiv.style.color = 'red';
            return;
        }

        const bmi = weight / (height * height);
        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
        resultDiv.style.color = 'black';
    });
});
