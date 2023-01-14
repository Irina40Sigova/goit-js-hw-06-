
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
     e.preventDefault();

     const {
        elements: { email, password }
      } = e.currentTarget;

      if (email.value === "" || password.value === ""){
     const message = 'All fields must be filled!!!!';
     return  alert(message);
      };

      console.log({ "email": email.value, "password": password.value });
   
      e.currentTarget.reset;

};





