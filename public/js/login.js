// Login password Hide/show

let lockicon = document.getElementById('lockicon');
let newlockicon = document.getElementById('newlockicon');
let lockicon2 = document.getElementById('lockicon2');

let password = document.getElementById('password');
let newpassword = document.getElementById('newPassword');
let confirmpassword = document.getElementById('confirmPassword');

lockicon.onclick = function() {
    if(password.type == 'password'){
        password.type = 'text';
        lockicon.src= '../assets/images/unlock.png';
    } else {
        password.type = 'password';
        lockicon.src = '../assets/images/lock.png';
    }
};

newlockicon.onclick = function() {
    if(newpassword.type == 'password'){
        newpassword.type = 'text';
        newlockicon.src= '../assets/images/unlock.png';
    } else {
        newpassword.type = 'password';
        newlockicon.src = '../assets/images/lock.png';
    }
};

lockicon2.onclick = function() {
    if(confirmpassword.type == 'password'){
        confirmpassword.type = 'text';
        lockicon2.src= '../assets/images/unlock.png';
    } else {
        confirmpassword.type = 'password';
        lockicon2.src = '../assets/images/lock.png';
    }
};

//  Signup Modal 

function openModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Attach the openModal function to the button click event
document.getElementById('openModalBtn').addEventListener('click', openModal);

// Attach the closeModal function to the close button click event
document.getElementById('closeModalBtn').addEventListener('click', closeModal);