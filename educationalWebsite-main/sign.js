document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const contactPattern = /^\d{10}$/;

    
    if (!contactPattern.test(contact)) {
        errorMessage.textContent = 'Please enter a valid contact number.';
        return;
    }

    
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must contain at least 8 characters, including 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.';
        return;
    }

    errorMessage.textContent = '';
    alert('Sign in successful!');
    window.location.href = 'home.html'; 
});
