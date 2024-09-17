document.getElementById('registrationForm').addEventListener('submit', function (e) {
    let hasError = false;

    // Name Validation
    const name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required";
        hasError = true;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = "Invalid email format";
        hasError = true;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long";
        hasError = true;
    } else {
        document.getElementById('passwordError').textContent = "";
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
        hasError = true;
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }

    // Age Validation
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100 || isNaN(age)) {
        document.getElementById('ageError').textContent = "Enter a valid age between 18 and 100";
        hasError = true;
    } else {
        document.getElementById('ageError').textContent = "";
    }

    // Gender Validation
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    if (!genderMale && !genderFemale) {
        document.getElementById('genderError').textContent = "Please select a gender";
        hasError = true;
    } else {
        document.getElementById('genderError').textContent = "";
    }

    // Country Validation
    const country = document.getElementById('country').value;
    if (country === "") {
        document.getElementById('countryError').textContent = "Please select a country";
        hasError = true;
    } else {
        document.getElementById('countryError').textContent = "";
    }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = "You must agree to the terms and conditions";
        hasError = true;
    } else {
        document.getElementById('termsError').textContent = "";
    }

    // If there's an error, prevent form submission
    if (hasError) {
        e.preventDefault();
    }
});