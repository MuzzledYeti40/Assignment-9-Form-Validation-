const form = document.getElementById('myForm');
const errorMessage = document.querySelector('.error-message');
const missingFieldsSpan = document.getElementById('missing-fields');

form.addEventListener('submit', function(event) {
    // Add 'submitted' class to trigger CSS styles
    form.classList.add('submitted');

    let missingFields = [];
    
    // Check each required field and collect missing ones
    const fields = ['first-name', 'last-name', 'city', 'state', 'zip-code'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            missingFields.push(field.previousElementSibling.textContent.trim());
        }
    });

    // If there are missing fields, prevent submission and show the error message
    if (missingFields.length > 0) {
        event.preventDefault();
        errorMessage.style.display = 'block';
        missingFieldsSpan.textContent = missingFields.join(', ');
    } else {
        // If all fields are filled, show success message
        alert('Form submitted successfully!');
    }
});
