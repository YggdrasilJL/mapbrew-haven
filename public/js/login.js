document.addEventListener('DOMContentLoaded', function () {
  // Login password Hide/show

  let lockicon = document.getElementById('lockicon');
  let newlockicon = document.getElementById('newlockicon');
  let lockicon2 = document.getElementById('lockicon2');

  let password = document.getElementById('password');
  let newpassword = document.getElementById('newPassword');
  let confirmpassword = document.getElementById('confirmPassword');

  lockicon.onclick = function () {
    if (password.type == 'password') {
      password.type = 'text';
      lockicon.src = '../assets/images/unlock.png';
    } else {
      password.type = 'password';
      lockicon.src = '../assets/images/lock.png';
    }
  };

  newlockicon.onclick = function () {
    if (newpassword.type == 'password') {
      newpassword.type = 'text';
      newlockicon.src = '../assets/images/unlock.png';
    } else {
      newpassword.type = 'password';
      newlockicon.src = '../assets/images/lock.png';
    }
  };

  lockicon2.onclick = function () {
    if (confirmpassword.type == 'password') {
      confirmpassword.type = 'text';
      lockicon2.src = '../assets/images/unlock.png';
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
  document
    .getElementById('closeModalBtn')
    .addEventListener('click', closeModal);

  const form = document.querySelector('form');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const user_name = form.querySelector('input[name="user_name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;
    const userData = {
      user_name: user_name,
      email: email,
      password: password,
    };
    try {
      const response = await fetch('../server.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      document.location.replace('/login');
      // Process the response from the server (success/failure message, etc.)
    } catch (error) {
      console.error('Error:', error);
    }
  });
});

//document.addEventListener("DOMContentLoaded", function () {
//const buttonClickSound = document.getElementById("buttonClickSound");
// buttonClickSound.volume = 0.5;

//const buttons = document.querySelectorAll(".navButton, .button-as-link, .primary-button");
//buttons.forEach(button => {
//  button.addEventListener("click", function () {
//      buttonClickSound.currentTime = 0; // Rewind to the beginning of the audio
//      buttonClickSound.playbackRate = 2.5;
//      buttonClickSound.play(); // Play the audio
//   });
//  });
//});
