document.addEventListener('DOMContentLoaded', () => {
    let myForm = document.getElementById('login_form');
    let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    let hiddenInput1 = document.querySelector('.input1')
    let hiddenInput2 = document.querySelector('.input2')
    let hideInput1 = document.querySelector('.email_input1');
    let hideInput2 = document.querySelector('.password_input1');
    let emailErrorMsg = document.querySelector('.emailerrormessage');
    let passwordErrorMsg = document.querySelector('.passworderrormessage');


    hiddenInput1.style.display = 'none';
    hiddenInput2.style.display = 'none';

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.getElementById('inputcont1');
        let password = document.getElementById('inputcont2');
        let inputEmail1 = document.getElementById('email_input1').value;
        // let inputEmail2 = document.getElementById('email_input2').value;
        let inputPassword1 = document.getElementById('password_input1').value;
        // let inputPassword2 = document.getElementById('password_input2').value;
        let checkboxInput

        let users = [
            { username: 'Charles', userEmail: 'ibehces347@gmail.com', userPassword: 'Abuja' },
            { username: 'Wayne', userEmail: 'ibehcharles347@gmail.com', userPassword: 'Lagos' },
            { username: 'Carti', userEmail: 'iehcharles347@gmail.com', userPassword: 'Ondo' },
            { username: 'Keno', userEmail: 'ibehcharle7@gmail.com', userPassword: 'Enugu' },
            { username: 'Kilolo', userEmail: 'ibhcharles347@gmail.com', userPassword: 'Imo' },
            { username: 'Onome', userEmail: 'ibehchles347@gmail.com', userPassword: 'Kogi' }
        ]
        let isMatch = users.some((user) => user.userEmail === inputEmail1 && user.userPassword === inputPassword1);
        if (isMatch) {
            myModal.show();
        } else {
            let emailError = document.createElement('p')
            emailError.textContent = 'Your email is incorrect or empty. Please check and try again.';
            emailErrorMsg.innerHTML = "";
            emailErrorMsg.append(emailError);
            hiddenInput1.style.display = 'flex';
            let passwordError = document.createElement('p')
            passwordError.textContent = 'Your password is incorrect or empty. Please check and try again.';
            passwordErrorMsg.innerHTML = "";
            passwordErrorMsg.append(passwordError);
            hiddenInput2.style.display = 'flex';
            email.classList.add('error');
            password.classList.add('error');
            email.classList.add('erroricon');
            password.classList.add('erroricon');
        }

    })


})


// user@gmail.com