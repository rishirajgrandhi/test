/**
 * BMI (Body Mass Index) logic.
 *
 * The core math lives in `bmi()` and `bmiCategory()`, pure functions so they
 * can be unit-tested without a DOM. The rest of this file wires them up to
 * the UI defined in index.html.
 */

/**
 * @param {number} weightKg
 * @param {number} heightCm
 * @returns {number} BMI value
 */
function bmi(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * @param {number} value BMI value
 * @returns {string} category label
 */
function bmiCategory(value) {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  if (value < 18.5) {
    return "Underweight";
  }
  if (value < 25) {
    return "Normal weight";
  }
  if (value < 30) {
    return "Overweight";
  }
  return "Obese";
}

/**
 * Round to 1 decimal place for display.
 * @param {number} value
 * @returns {string}
 */
function formatBmi(value) {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  return value.toFixed(1);
}

// Export for tests when running under Node/CommonJS.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { bmi, bmiCategory, formatBmi };
}

// Only run the UI wiring in a browser environment.
if (typeof document !== "undefined") {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const bmiOutput = document.getElementById("bmi");
  const categoryOutput = document.getElementById("category");

  function calculate() {
    const weight = parseFloat(weightInput.value) || 0;
    const height = parseFloat(heightInput.value) || 0;

    const value = bmi(weight, height);

    bmiOutput.textContent = formatBmi(value);
    categoryOutput.textContent = bmiCategory(value);
  }

  document.getElementById("calculate").addEventListener("click", calculate);

  calculate();
}
