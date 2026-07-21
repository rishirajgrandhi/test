/**
 * Compound interest logic.
 *
 * The math lives in `compoundInterest()`, a pure function so it can be
 * unit-tested without a DOM. The rest of this file wires it up to the UI
 * defined in index.html.
 */

/**
 * @param {number} principal
 * @param {number} ratePercent annual rate, e.g. 5 for 5%
 * @param {number} years
 * @param {number} frequency times compounded per year
 * @returns {{interest: number, total: number}}
 */
function compoundInterest(principal, ratePercent, years, frequency) {
  const rate = ratePercent / 100;
  const total = principal * Math.pow(1 + rate / frequency, frequency * years);
  return { interest: total - principal, total };
}

/**
 * Round to 2 decimal places for currency-style display.
 * @param {number} value
 * @returns {string}
 */
function formatCurrency(value) {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  return value.toFixed(2);
}

// Export for tests when running under Node/CommonJS.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { compoundInterest, formatCurrency };
}

// Only run the UI wiring in a browser environment.
if (typeof document !== "undefined") {
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  const frequencyInput = document.getElementById("frequency");
  const interestOutput = document.getElementById("interest");
  const totalOutput = document.getElementById("total");

  function calculate() {
    const principal = parseFloat(principalInput.value) || 0;
    const rate = parseFloat(rateInput.value) || 0;
    const time = parseFloat(timeInput.value) || 0;
    const frequency = parseFloat(frequencyInput.value) || 1;

    const result = compoundInterest(principal, rate, time, frequency);

    interestOutput.textContent = formatCurrency(result.interest);
    totalOutput.textContent = formatCurrency(result.total);
  }

  document.getElementById("calculate").addEventListener("click", calculate);

  calculate();
}
