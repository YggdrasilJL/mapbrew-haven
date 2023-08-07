// Login password Hide/show

let lockicon = document.getElementById('lockicon');
let password = document.querySelector('#password');

lockicon.onclick = function() {
    if(password.type == 'password'){
        password.type = 'text';
        lockicon.src= '../assets/images/unlock.png';
    } else {
        password.type = 'password'
        lockicon.src = '../assets/images/lock.png'
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