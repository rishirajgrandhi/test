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

## interest-calculator

A simple interest calculator built with plain HTML, CSS, and JavaScript — no
build step or dependencies.

- `interest-calculator/index.html` — markup and layout
- `interest-calculator/style.css` — styling
- `interest-calculator/interest.js` — logic (interest math + UI wiring)

### Usage

Open `interest-calculator/index.html` in any web browser. Enter a principal,
annual rate, and time in years, choose simple or compound, and click
Calculate.

### Features

- Simple interest: `I = P * R * T / 100`
- Compound interest with configurable compounds per year
- Displays both the interest earned and the total amount

The core math lives in `simpleInterest()` and `compoundInterest()`, pure
functions that are also exported for Node so they can be unit-tested without
a browser.
