$(".modal-open-top").click(function () {
  document.getElementById("modal-open").click();
});

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const postcode = document.getElementById("postcode");

window.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.href;

  // Compare the URL with the condition and hide the div if matched
  if ( (currentPage.includes("organisatie/groningen")) || (currentPage.includes("organisatie/test-onderhoud")) ) {
    document.getElementById("postcode-wrap").classList.remove("hidden");
    postcode.setAttribute("required", "");
  }
});

/* email of phone required */
phone.addEventListener("blur", function (event) {
  if (phone.value.length !== 0) {
    email.removeAttribute("required");
    email.previousElementSibling
      .querySelector(".label-required.active")
      .classList.remove("active");
  } else if (phone.value.length === 0) {
    email.setAttribute("required", "");
    email.previousElementSibling
      .querySelector(".label-required")
      .classList.add("active");
  }
});
email.addEventListener("blur", function (event) {
  if (email.value.length !== 0) {
    phone.removeAttribute("required");
    phone.previousElementSibling
      .querySelector(".label-required.active")
      .classList.remove("active");
  } else if (email.value.length === 0) {
    phone.setAttribute("required", "");
    phone.previousElementSibling
      .querySelector(".label-required")
      .classList.add("active");
  }
});
postcode.addEventListener("blur", function (event) {
  if (postcode.value.length !== 0) {
    postcode.previousElementSibling
      .querySelector(".label-required.active")
      .classList.remove("active");
  } else if (
    postcode.value.length === 0 &&
    currentPage.includes("organisatie/groningen")
  ) {
    postcode.setAttribute("required", "");
    postcode.previousElementSibling
      .querySelector(".label-required")
      .classList.add("active");
  }
});
document
  .querySelectorAll("#wf-form-Adviesgesprek input")
  .forEach(function (element) {
    if (element.required)
      element.previousElementSibling
        .querySelector(".label-required")
        .classList.add("active");
  });
/* give error class */
document
  .querySelectorAll("#wf-form-Adviesgesprek input")
  .forEach(function (element) {
    element.addEventListener("blur", function () {
      if (!this.checkValidity()) this.classList.add("error-input");
    });
  });

document
  .querySelectorAll("#wf-form-Adviesgesprek input")
  .forEach(function (element) {
    element.addEventListener("keyup", function () {
      // if input field passes validation remove the error class, else add it
      if (this.checkValidity()) this.classList.remove("error-input");
    });
  });

const form = document.getElementsByTagName("form")[0];
const emailError = document.querySelector("#email_error");
const phoneError = document.querySelector("#phone_error");
const postcodeError = document.querySelector("#postcode_error");
const submit = document.getElementById("submit");
const formMessage = document.getElementById("form-message");

/* submit event on form */
document
  .querySelector("#wf-form-Adviesgesprek")
  .addEventListener("submit", function (e) {
    if (this.checkValidity()) {
      e.preventDefault();

      formMessage.classList.add("form-done");
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", form.action, true);
      xhr.send(formData);
      xhr.onload = function (e) {
        if (xhr.status === 200) {
          formMessage.innerHTML = "Bedankt voor je aanvraag!";
        } else {
          var response = JSON.parse(xhr.response);
          formMessage.innerHTML = "Error: " + response.error;
        }
      };
      setTimeout(function () {
        form.className = "form-hide";
      }, 1000);
    }

    /* submit event on form */
    document
      .querySelector("#wf-form-Adviesgesprek-2")
      .addEventListener("submit", function (e) {
        if (this.checkValidity()) {
          e.preventDefault();

          formMessage.classList.add("form-done");
          var formData = new FormData(form);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", form.action, true);
          xhr.send(formData);
          xhr.onload = function (e) {
            if (xhr.status === 200) {
              formMessage.innerHTML = "Bedankt voor je aanvraag!";
            } else {
              var response = JSON.parse(xhr.response);
              formMessage.innerHTML = "Error: " + response.error;
            }
          };
          setTimeout(function () {
            form.className = "form-hide";
          }, 1000);
        }
      });

    // if form has not passed validation
    if (!this.checkValidity()) {
      // check validation for each input field inside the form
      // if input field is valid then remove the error class, else add it
      this.querySelectorAll("input").forEach(function (element) {
        if (element.checkValidity()) element.classList.remove("error-input");
        else element.classList.add("error-input");
      });
      $("form input.error-input:first").focus();
      e.preventDefault();
    }
  });

email.addEventListener("blur", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "form-field-error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showErrorEmail();
  }
});

email.addEventListener("keyup", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "form-field-error"; // Reset the visual state of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
    postcodeError.className = "form-field-error"; // Reset the visual state of the message
  }
});

phone.addEventListener("blur", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    phoneError.textContent = ""; // Reset the content of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
    emailError.className = "form-field-error"; // Reset the visual state of the message
    postcodeError.className = "form-field-error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showErrorPhone();
  }
});

phone.addEventListener("keyup", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    phoneError.textContent = ""; // Reset the content of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
  }
});

phone.addEventListener("blur", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    phoneError.textContent = ""; // Reset the content of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
    emailError.className = "form-field-error"; // Reset the visual state of the message
    postcodeError.className = "form-field-error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showErrorPhone();
  }
});

phone.addEventListener("keyup", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    phoneError.textContent = ""; // Reset the content of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
  }
});

postcode.addEventListener("blur", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (postcode.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    postcodeError.textContent = ""; // Reset the content of the message
    phoneError.className = "form-field-error"; // Reset the visual state of the message
    emailError.className = "form-field-error"; // Reset the visual state of the message
    postcodeError.className = "form-field-error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showErrorPhone();
  }
});

postcode.addEventListener("keyup", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (postcode.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    postcodeError.textContent = ""; // Reset the content of the message
    postcodeError.className = "form-field-error"; // Reset the visual state of the message
  }
});

form.addEventListener("submit", function (event) {
  // if the phone field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showErrorEmail();
    $("form input.error-input:first").focus();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!phone.validity.valid) {
    // If it isn't, we display an appropriate error message
    showErrorPhone();
    $("form input.error-input:first").focus();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showErrorEmail() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent =
      "Het veld e-mailadres is niet ingevuld. Vul minstens het veld e-mailadres óf het veld telefoonnummer in.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent =
      "Het veld e-mailadres is niet juist ingevuld. Vul een geldig e-mailadres in.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Een e-mailadres in het veld e-mailadres moet minstens ${email.minLength} tekens bevatten; Jij vulde in: ${email.value.length}.`;
  }
  // Set the styling appropriately
  emailError.className = "form-field-error active";
}

function showErrorPhone() {
  if (phone.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    phoneError.textContent =
      "Het veld telefoonnummer is niet ingevuld. Vul minstens het veld telefoonnummer óf het veld e-mailadres in.";
  } else if (phone.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    phoneError.textContent =
      "Het veld telefoonnummer is niet juist ingevuld. Vul een geldig telefoonnummer in.";
  } else if (phone.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    phoneError.textContent = `Een telefoonnummer in het veld telefoonnummer moet minstens ${phone.minLength} tekens bevatten; Jij vulde in: ${phone.value.length}.`;
  }
  // Set the styling
  phoneError.className = "form-field-error active";
}

function showErrorPhone() {
  if (postcode.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    postcodeError.textContent =
      "Het veld postcode is niet ingevuld. Vul een geldige postcode in.";
  } else if (postcode.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    postcodeError.textContent =
      "Het veld postcode is niet juist ingevuld. Vul een geldige postcode in. (4 cijfers en 2 letters.)";
  } else if (postcode.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    postcodeError.textContent = `Een postcode in het veld postcode moet minstens ${postcode.minLength} tekens bevatten; Jij vulde in: ${postcode.value.length}.`;
  }
  // Set the styling
  postcodeError.className = "form-field-error active";
}
