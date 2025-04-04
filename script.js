document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submittedDataDiv = document.getElementById('submittedData');
    const displayFirstName = document.getElementById('displayFirstName');
    const displayLastName = document.getElementById('displayLastName');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayMessage = document.getElementById('displayMessage');
    const backButton = document.getElementById('backButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value; // Capture phone number
        const message = document.getElementById('message').value;

        // Display the submitted data
        displayFirstName.textContent = `First Name: ${firstName}`;
        displayLastName.textContent = `Last Name: ${lastName}`;
        displayEmail.textContent = `Email: ${email}`;
        displayPhone.textContent = `Phone Number: ${phone}`; // Display phone number
        displayMessage.textContent = `Message: ${message}`;

        // Hide the form and show the submitted data
        form.style.display = 'none';
        submittedDataDiv.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        // Hide the submitted data and show the form again
        submittedDataDiv.style.display = 'none';
        form.style.display = 'block';
        form.reset(); // Reset the form fields
    });
});