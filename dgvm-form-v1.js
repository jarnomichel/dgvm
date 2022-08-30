const email = document.getElementById('email');
const gemeente = document.getElementById('gemeente');
 
/* give error class */
document.querySelectorAll("#wf-form-gem-aanmeld input").forEach(function(element) {
    element.addEventListener('blur', function() {
        // if input field passes validation remove the error class, else add it
        if(!this.checkValidity())
            this.classList.add('error-input');
    });
});


document.querySelectorAll("#wf-form-gem-aanmeld input").forEach(function(element) {
    element.addEventListener('keyup', function() {
        // if input field passes validation remove the error class, else add it
        if(this.checkValidity())
            this.classList.remove('error-input');
    });
});

      const form  = document.getElementsByTagName('form')[0];
      const emailError = document.querySelector('#email_error');
      const gemeenteError = document.querySelector('#gemeente_error');
      const submit = document.getElementById('submit');
      const formMessage = document.getElementById("form-message");

/* submit event on form */
document.querySelector("#wf-form-gem-aanmeld").addEventListener('submit', function(e) {

  if(this.checkValidity()) {

    e.preventDefault();
      
      formMessage.classList.add('form-done');
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", form.action, true);
      xhr.send(formData);
      xhr.onload = function(e) {
          if (xhr.status === 200) {
              formMessage.innerHTML = "Bedankt voor je aanvraag!";
              } else {
              var response = JSON.parse(xhr.response);
              formMessage.innerHTML = "Error: " + response.error;
          }
      };
      setTimeout(function() {
        form.className = 'form-hide';
      }, 1000);
      
   

    }
  
  // if form has not passed validation 
    if(!this.checkValidity()) {
        // check validation for each input field inside the form
        // if input field is valid then remove the error class, else add it
        this.querySelectorAll("input").forEach(function(element) {
            if(element.checkValidity())
                element.classList.remove('error-input');
            else
                element.classList.add('error-input');
        });
        $('form input.error-input:first').focus(); 
        e.preventDefault();
   
    }    

});



      email.addEventListener('blur', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.

        if (email.validity.valid) {
          // In case there is an error message visible, if the field
          // is valid, we remove the error message.
          emailError.textContent = ''; // Reset the content of the message
          emailError.className = 'form-field-error'; // Reset the visual state of the message
        } else {
          // If there is still an error, show the correct error
          showErrorEmail();
        }
      });

      email.addEventListener('keyup', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.

        if (email.validity.valid) {
          // In case there is an error message visible, if the field
          // is valid, we remove the error message.
          emailError.textContent = ''; // Reset the content of the message
          emailError.className = 'form-field-error'; // Reset the visual state of the message
          gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
        }
      });

      gemeente.addEventListener('blur', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (gemeente.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      gemeenteError.textContent = ''; // Reset the content of the message
      gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
      emailError.className = 'form-field-error'; // Reset the visual state of the message

    } else {
      // If there is still an error, show the correct error
      showErrorGemeente();
    }
  });

  gemeente.addEventListener('keyup', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (gemeente.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      gemeenteError.textContent = ''; // Reset the content of the message
      gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
    }
  });

  form.addEventListener('submit', function (event) {
    // if the gemeente field is valid, we let the form submit


    if(!email.validity.valid) {
          // If it isn't, we display an appropriate error message
          showErrorEmail();
          $('form input.error-input:first').focus(); 
          // Then we prevent the form from being sent by canceling the event
          event.preventDefault();
        }

    if(!gemeente.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorGemeente();
      $('form input.error-input:first').focus(); 
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }

  });

      function showErrorEmail() {
            if(email.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            emailError.textContent = 'Het veld e-mailadres is niet ingevuld. Vul minstens het veld e-mailadres óf het veld telefoonnummer in.';
          } else if(email.validity.typeMismatch) {
              // If the field doesn't contain an email address,
              // display the following error message.
              emailError.textContent = 'Het veld e-mailadres is niet juist ingevuld. Vul een geldig e-mailadres in.';
            } else if(email.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              emailError.textContent = `Een e-mailadres in het veld e-mailadres moet minstens ${ email.minLength } tekens bevatten; Jij vulde in: ${ email.value.length }.`;
            }
            // Set the styling appropriately
            emailError.className = 'form-field-error active';

      }

      function showErrorGemeente() {
            if(gemeente.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            gemeenteError.textContent = 'Het veld voor gemeente en/​of woningcorporatie is niet ingevuld. Dit veld is verplicht.';
            } else if(gemeente.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              gemeenteError.textContent = `De naam van de gemeente en/​of woningcorporatie moet minstens ${ gemeente.minLength } tekens bevatten; Jij vulde in: ${ gemeente.value.length }.`;
            }
            // Set the styling appropriately
            gemeenteError.className = 'form-field-error active';
      }


    </script>
    
    <script>

const email = document.getElementById('email-2');
const gemeente = document.getElementById('gemeente-2');
 
/* give error class */
document.querySelectorAll("#wf-form-gem-aanmeld input").forEach(function(element) {
    element.addEventListener('blur', function() {
        // if input field passes validation remove the error class, else add it
        if(!this.checkValidity())
            this.classList.add('error-input');
    });
});


document.querySelectorAll("#wf-form-gem-aanmeld input").forEach(function(element) {
    element.addEventListener('keyup', function() {
        // if input field passes validation remove the error class, else add it
        if(this.checkValidity())
            this.classList.remove('error-input');
    });
});

      const form  = document.getElementsByTagName('form')[0];
      const emailError = document.querySelector('#email_error');
      const gemeenteError = document.querySelector('#gemeente_error');
      const submit = document.getElementById('submit-2');
      const formMessage = document.getElementById("form-message-2");

/* submit event on form */
document.querySelector("#wf-form-gem-aanmeld-mob").addEventListener('submit', function(e) {

  if(this.checkValidity()) {

    e.preventDefault();
      
      formMessage.classList.add('form-done');
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", form.action, true);
      xhr.send(formData);
      xhr.onload = function(e) {
          if (xhr.status === 200) {
              formMessage.innerHTML = "Bedankt voor je aanvraag!";
              } else {
              var response = JSON.parse(xhr.response);
              formMessage.innerHTML = "Error: " + response.error;
          }
      };
      setTimeout(function() {
        form.className = 'form-hide';
      }, 1000);
      
   

    }
  
  // if form has not passed validation 
    if(!this.checkValidity()) {
        // check validation for each input field inside the form
        // if input field is valid then remove the error class, else add it
        this.querySelectorAll("input").forEach(function(element) {
            if(element.checkValidity())
                element.classList.remove('error-input');
            else
                element.classList.add('error-input');
        });
        $('form input.error-input:first').focus(); 
        e.preventDefault();
   
    }    

});



      email.addEventListener('blur', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.

        if (email.validity.valid) {
          // In case there is an error message visible, if the field
          // is valid, we remove the error message.
          emailError.textContent = ''; // Reset the content of the message
          emailError.className = 'form-field-error'; // Reset the visual state of the message
        } else {
          // If there is still an error, show the correct error
          showErrorEmail();
        }
      });

      email.addEventListener('keyup', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.

        if (email.validity.valid) {
          // In case there is an error message visible, if the field
          // is valid, we remove the error message.
          emailError.textContent = ''; // Reset the content of the message
          emailError.className = 'form-field-error'; // Reset the visual state of the message
          gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
        }
      });

      gemeente.addEventListener('blur', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (gemeente.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      gemeenteError.textContent = ''; // Reset the content of the message
      gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
      emailError.className = 'form-field-error'; // Reset the visual state of the message

    } else {
      // If there is still an error, show the correct error
      showErrorGemeente();
    }
  });

  gemeente.addEventListener('keyup', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (gemeente.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      gemeenteError.textContent = ''; // Reset the content of the message
      gemeenteError.className = 'form-field-error'; // Reset the visual state of the message
    }
  });

  form.addEventListener('submit', function (event) {
    // if the gemeente field is valid, we let the form submit


    if(!email.validity.valid) {
          // If it isn't, we display an appropriate error message
          showErrorEmail();
          $('form input.error-input:first').focus(); 
          // Then we prevent the form from being sent by canceling the event
          event.preventDefault();
        }

    if(!gemeente.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorGemeente();
      $('form input.error-input:first').focus(); 
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }

  });

      function showErrorEmail() {
            if(email.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            emailError.textContent = 'Het veld e-mailadres is niet ingevuld. Vul minstens het veld e-mailadres óf het veld telefoonnummer in.';
          } else if(email.validity.typeMismatch) {
              // If the field doesn't contain an email address,
              // display the following error message.
              emailError.textContent = 'Het veld e-mailadres is niet juist ingevuld. Vul een geldig e-mailadres in.';
            } else if(email.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              emailError.textContent = `Een e-mailadres in het veld e-mailadres moet minstens ${ email.minLength } tekens bevatten; Jij vulde in: ${ email.value.length }.`;
            }
            // Set the styling appropriately
            emailError.className = 'form-field-error active';

      }

      function showErrorGemeente() {
            if(gemeente.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            gemeenteError.textContent = 'Het veld voor gemeente en/​of woningcorporatie is niet ingevuld. Dit veld is verplicht.';
            } else if(gemeente.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              gemeenteError.textContent = `De naam van de gemeente en/​of woningcorporatie moet minstens ${ gemeente.minLength } tekens bevatten; Jij vulde in: ${ gemeente.value.length }.`;
            }
            // Set the styling appropriately
            gemeenteError.className = 'form-field-error active';
      }
