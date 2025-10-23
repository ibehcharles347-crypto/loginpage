document.addEventListener('DOMContentLoaded', ()=> {
    let myForm = document.getElementById('login_form');
    let hiddenInput1 = document.querySelector('.input1')
    let hiddenInput2 = document.querySelector('.input2')
    let hideInput1 = document.querySelector('.email_input1');
    let hideInput2 = document.querySelector('.password_input1');
    let emailErrorMsg = document.querySelector('.emailerrormessage');
    let passwordErrorMsg = document.querySelector('.passworderrormessage');


     hiddenInput1.style.display = 'none';
     hiddenInput2.style.display = 'none';

     myForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        let inputEmail1 = document.getElementById('email_input1').value;
        let inputEmail2 = document.getElementById('email_input2').value;
        let inputPassword1 = document.getElementById('password_input1').value;
        let inputPassword2 = document.getElementById('password_input2').value; 
        let checkboxInput


        const userEmail = ['ibehcharles347@gmail.com', 'ibehmarcel@yahoo.com', 'ebuka@email.com'];
        const userPassword = ['ososos', '12345', '78910']

        if (userEmail.includes(inputEmail1) || userEmail.includes(inputEmail2)){
            console.log(inputEmail1);
            console.log(inputEmail2);
        }else{
            let emailError = document.createElement('p')
            emailError.textContent = 'Your email is incorrect or empty. Please check and try again.';
            emailErrorMsg.innerHTML = "";
            emailErrorMsg.append(emailError);
            hiddenInput1.style.display = 'flex';
            hideInput1.style.display = 'none';
        }
        if (userPassword.includes(inputPassword1) || userPassword.includes(inputPassword2)){
            console.log(inputPassword1);
            console.log(inputPassword2);

        }else{
            let passwordError = document.createElement('p')
            passwordError.textContent = 'Your password is incorrect or empty. Please check and try again.';
            passwordErrorMsg.innerHTML = "";
            passwordErrorMsg.append(passwordError);
            hiddenInput2.style.display = 'flex';
            hideInput2.style.display = 'none';
        }

     })


})


// user@gmail.com