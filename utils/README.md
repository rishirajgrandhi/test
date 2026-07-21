# utils

A collection of small, self-contained utilities.

## calculator

A simple calculator built with plain HTML, CSS, and JavaScript — no build step
or dependencies.

- `calculator/index.html` — markup and layout
- `calculator/style.css` — styling
- `calculator/calculator.js` — logic (arithmetic + UI wiring)

### Usage

Open `calculator/index.html` in any web browser.

### Features

- Add, subtract, multiply, divide, and modulo
- Clear (`C`) and delete/backspace (`⌫`)
- Decimal input and floating-point rounding
- Division-by-zero shows `Error`

The core arithmetic lives in `compute()`, a pure function that is also exported
for Node so it can be unit-tested without a browser.
