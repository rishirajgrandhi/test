# utils

A collection of small, self-contained utilities.

## Code style

- Plain HTML, CSS, and JavaScript — no build step, bundler, or dependencies.
- Each util lives in its own directory with `index.html`, `style.css`, and a
  single `.js` file for logic.
- Keep core logic in small, pure functions (e.g. `compute()`,
  `simpleInterest()`) separate from DOM/UI wiring, and export them for Node
  so they can be unit-tested without a browser.

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

## bmi-calculator

A BMI (Body Mass Index) calculator built with plain HTML, CSS, and
JavaScript — no build step or dependencies.

- `bmi-calculator/index.html` — markup and layout
- `bmi-calculator/style.css` — styling
- `bmi-calculator/bmi.js` — logic (BMI math + UI wiring)

### Usage

Open `bmi-calculator/index.html` in any web browser. Enter a weight in
kilograms and a height in centimeters, then click Calculate.

### Features

- BMI: `weight (kg) / height (m)^2`
- Categorizes the result as Underweight, Normal weight, Overweight, or Obese

The core math lives in `bmi()` and `bmiCategory()`, pure functions that are
also exported for Node so they can be unit-tested without a browser.

## inr-usd-converter

An INR to USD converter built with plain HTML, CSS, and JavaScript — no build
step or dependencies.

- `inr-usd-converter/index.html` — markup and layout
- `inr-usd-converter/style.css` — styling
- `inr-usd-converter/inr-usd.js` — logic (conversion math + UI wiring)

### Usage

Open `inr-usd-converter/index.html` in any web browser. Enter an amount in
INR and click Convert.

### Features

- Fixed conversion rate: 1 USD = 95 INR
- USD result rounded to 2 decimal places

The core math lives in `inrToUsd()`, a pure function that is also exported
for Node so it can be unit-tested without a browser.
