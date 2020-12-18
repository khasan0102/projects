function calculateBmi() {
  const name = document.getElementById("name");
  const weightVal = document.getElementById("weight");
  const heightVal = document.getElementById("height");
  const result = document.querySelector("#result");

  const weight = parseFloat(weightVal.value);
  const height = parseFloat(heightVal.value);

  let bmi = (weight / (height * height)).toFixed(2);
  result.textContent = `${name.value}'s BMI is ${bmi}`
  console.log(bmi);

  if (bmi < 18.5) {
    result.classList.add("under");
    result.classList.remove('normal');
    result.textContent = result.textContent = `${name.value}'s BMI is ${bmi} This is Underweight`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.classList.add('normal');
    result.classList.remove("under");
    result.textContent = result.textContent = `${name.value}'s BMI is ${bmi} This is Normlweight`
  }
}
