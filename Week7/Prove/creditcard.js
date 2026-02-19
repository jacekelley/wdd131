document.getElementById("cardForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const message = document.getElementById("message");

  // Validate card number
  if (cardNumber !== "1234123412341234") {
    message.textContent = "Invalid card number.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "Payment successful!";
  message.style.color = "green";
});