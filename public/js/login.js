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