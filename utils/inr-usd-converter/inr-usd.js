/**
 * INR to USD conversion logic.
 *
 * Uses a fixed rate of 1 USD = 95 INR. The core math lives in
 * `inrToUsd()`, a pure function so it can be unit-tested without a DOM.
 * The rest of this file wires it up to the UI defined in index.html.
 */

const USD_TO_INR_RATE = 95;

/**
 * @param {number} inr Amount in INR
 * @returns {number} Equivalent amount in USD
 */
function inrToUsd(inr) {
  return inr / USD_TO_INR_RATE;
}

/**
 * Round to 2 decimal places for display.
 * @param {number} value
 * @returns {string}
 */
function formatUsd(value) {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  return value.toFixed(2);
}

// Export for tests when running under Node/CommonJS.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { USD_TO_INR_RATE, inrToUsd, formatUsd };
}

// Only run the UI wiring in a browser environment.
if (typeof document !== "undefined") {
  const inrInput = document.getElementById("inr");
  const usdOutput = document.getElementById("usd");

  function calculate() {
    const inr = parseFloat(inrInput.value) || 0;
    const usd = inrToUsd(inr);
    usdOutput.textContent = formatUsd(usd);
  }

  document.getElementById("calculate").addEventListener("click", calculate);

  calculate();
}
