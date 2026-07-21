/**
 * Simple calculator logic.
 *
 * The core arithmetic lives in `compute()`, a pure function so it can be
 * unit-tested without a DOM. The rest of this file wires `compute()` up to
 * the UI defined in index.html.
 */

/**
 * Apply a single binary operation.
 * @param {number} a  left operand
 * @param {string} op one of "+", "-", "*", "/", "%"
 * @param {number} b  right operand
 * @returns {number}
 */
function compute(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
    case "%":
      return a % b;
    default:
      throw new Error("Unknown operator: " + op);
  }
}

/**
 * Round away floating-point noise (e.g. 0.1 + 0.2) and stringify.
 * @param {number} value
 * @returns {string}
 */
function formatResult(value) {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  // Trim to at most 12 significant digits, then drop trailing zeros.
  return parseFloat(value.toPrecision(12)).toString();
}

// Export for tests when running under Node/CommonJS.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { compute, formatResult };
}

// Only run the UI wiring in a browser environment.
if (typeof document !== "undefined") {
  const display = document.getElementById("display");

  const state = {
    current: "0", // number currently being typed
    previous: null, // stored operand (number) or null
    operator: null, // pending operator or null
    justEvaluated: false, // true right after "=" so next digit starts fresh
  };

  function render() {
    display.value = state.current;
  }

  function inputDigit(digit) {
    if (state.justEvaluated) {
      state.current = "0";
      state.justEvaluated = false;
    }
    if (digit === ".") {
      if (!state.current.includes(".")) {
        state.current += ".";
      }
      return;
    }
    state.current =
      state.current === "0" ? String(digit) : state.current + digit;
  }

  function chooseOperator(op) {
    if (state.operator !== null && !state.justEvaluated) {
      evaluate();
    }
    state.previous = parseFloat(state.current);
    state.operator = op;
    state.justEvaluated = false;
    state.current = "0";
  }

  function evaluate() {
    if (state.operator === null || state.previous === null) {
      return;
    }
    try {
      const result = compute(
        state.previous,
        state.operator,
        parseFloat(state.current)
      );
      state.current = formatResult(result);
    } catch (err) {
      state.current = "Error";
    }
    state.previous = null;
    state.operator = null;
    state.justEvaluated = true;
  }

  function clearAll() {
    state.current = "0";
    state.previous = null;
    state.operator = null;
    state.justEvaluated = false;
  }

  function deleteLast() {
    if (state.justEvaluated) {
      clearAll();
      return;
    }
    state.current = state.current.length > 1 ? state.current.slice(0, -1) : "0";
  }

  document.querySelector(".keys").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.digit !== undefined) {
      inputDigit(button.dataset.digit);
    } else if (button.dataset.operator !== undefined) {
      chooseOperator(button.dataset.operator);
    } else if (button.dataset.action === "equals") {
      evaluate();
    } else if (button.dataset.action === "clear") {
      clearAll();
    } else if (button.dataset.action === "delete") {
      deleteLast();
    }
    render();
  });

  render();
}
