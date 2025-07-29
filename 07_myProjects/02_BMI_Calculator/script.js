document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    // this usecase will give you empty value
    // const height = parseInt(document.querySelector('#height').value)

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log("Manisha")

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector("#result");

        let bmi;
        
        if(height === "" || height < 0 || isNaN(height)) {
            console.log(`Please enter a valid height, you have entered ${height}`);
        } else if(weight === "" || weight < 0 || isNaN(weight)) {
            console.log(`Please enter a valid weight, you have entered ${weight}`);
        } else {
            bmi = (weight / ((height * height) / 10000)).toFixed(2);
            // showing the calculated Bmi Index
            result.innerHTML = `<span>BMI: ${bmi}</span>`;
        }


        // feedback         
        const feedback = document.querySelector("#feedback")
        if(bmi < 18.8) {
            feedback.innerHTML = "You're underweight. A balanced diet and proper nutrition can help you reach a healthier weight. Consider consulting a healthcare professional."
        } else if (bmi <= 24.9) {
            feedback.textContent = "Great! You have a healthy body weight. Keep maintaining your balanced diet and active lifestyle!"
        } else {
            feedback.textContent = "You're slightly above the healthy weight range. Regular exercise and a healthy diet can help. It's a good idea to talk to a healthcare provider if you're concerned."
        }
    });
}); 