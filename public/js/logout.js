function logout() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Redirect the user to the login page after successful logout
                window.location.href = '/login';
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
}

// Attach the logout function to the logout button click event
document.getElementById('logoutButton').addEventListener('click', logout);

document.addEventListener("DOMContentLoaded", function () {
    const buttonClickSound = document.getElementById("buttonClickSound");

    const buttons = document.querySelectorAll(".navButton, #openModalBtn, #forgotpassword button, #userSubmit");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttonClickSound.currentTime = 0; // Rewind to the beginning of the audio
            buttonClickSound.play(); // Play the audio
        });
    });
});