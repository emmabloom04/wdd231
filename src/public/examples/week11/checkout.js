const checkoutForm = document.getElementById("checkoutForm");
const errorMessagesDiv = document.getElementById("errorMessages");
const errorList = errorMessagesDiv.querySelector("ul");

/**
 * Validates a credit card number using Luhn's algorithm.
 * @param {string} cardNumber - The credit card number string to validate.
 * @returns {boolean} - True if the card number is valid according to Luhn's algorithm, false otherwise.
 */
function isValidLuhn(cardNumber) {
  let sum = 0;
  let isSecondDigit = false;

  // Remove any non-digit characters from the card number
  cardNumber = cardNumber.replace(/\D/g, "");

  // Check typical card number length (13-19 digits)
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }

  // Iterate through the digits from right to left
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);

    // Double every second digit from the right
    if (isSecondDigit) {
      digit *= 2;
      // If doubling results in a number greater than 9, subtract 9
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    // Toggle the flag for the next digit
    isSecondDigit = !isSecondDigit;
  }
  // The number is valid if the sum is a multiple of 10
  return sum % 10 === 0;
}

// Event listener for form submission
checkoutForm.addEventListener("submit", function (event) {
  // Add code here to validate the credit card and expiration date.
  errorList.innerHTML = "";
  errorMessagesDiv.classList.add("hidden");
  let errors = [];

  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expMonth = parseInt(document.getElementById("expMonth").value, 10);
  const expYear = parseInt(document.getElementById("expYear").value, 10);

  if (!cardNumber || !isValidLuhn(cardNumber)) {
    errors.push(
      "Credit Card Number: Make sure the credit card number is valid."
    );
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (expYear < currentYear) {
    errors.push("Expiration Date: Year must be current or future.");
  } else if (expYear === currentYear && expMonth < currentMonth) {
    errors.push("Expiration Date: Month/Year must be current or future.");
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      const li = document.createElement("li");
      li.textContent = error;
      errorList.appendChild(li);
    });
    errorMessagesDiv.classList.remove("hidden");
    event.preventDefault();
  }
});
