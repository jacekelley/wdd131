
const theForm = document.querySelector('#checkoutForm');
const paymentSelect = document.querySelector('#paymentMethod');
const creditCardContainer = document.querySelector('#creditCardNumberContainer');
const paypalContainer = document.querySelector('#paypalUsernameContainer');
const creditInput = document.querySelector('#creditCardNumberContainer input');
const paypalInput = document.querySelector('#paypalUsernameContainer input');

function togglePaymentDetails(e) {

  // Show the container based on the selected payment method, and add the required attribute back.
  let value = e.target.value;
  paypalContainer.classList.add('hide');
  creditCardContainer.classList.add('hide');
  paypalInput.required = false;
  creditInput.required = false;

  // hide and show selected payment type
  if (value == 'creditCard') {
    creditCardContainer.classList.remove('hide');
    creditInput.required = true;
  } else if (value == 'paypal') {
    paypalContainer.classList.remove('hide');
    paypalInput.required = true;
  }

  // Update ARIA expanded attribute
  // aria-expanded belongs to the element that toggles visibility, not the hidden content itself.
  if (value === 'creditCard' || value === 'paypal') {
    paymentSelect.setAttribute("aria-expanded", "true");
  } else {
    paymentSelect.setAttribute("aria-expanded", "false");
  }
}

// attach a submit event handler to the form
paymentSelect.addEventListener('change', togglePaymentDetails);

//validations and errors

function displayError(msg) {
  // display error message
  document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
  // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
  return number === '1234123412341234'
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  let cardNumber = document.querySelector('#creditCardNumber');
  const cardNum = cardNumber.value.trim();
  if (paymentSelect.value === 'creditCard') {
    // Check if it's numeric and valid in one go

    if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
      errorMsg += 'Card number is not valid\n';
    }

    //check date
    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
      errorMsg += 'Card is expired\n';
    }
  }

  if (errorMsg !== '') {
    // there was an error. stop the form and display the errors.
    displayError(errorMsg)
    return;
  }
  // Success: show a confirmation message
  const formContainer = document.getElementById('checkoutForm');
  formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

document.querySelector('#checkoutForm').addEventListener('submit', submitHandler)

