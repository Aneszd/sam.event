document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Here you can add your login logic, e.g., sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // For demonstration purposes, we'll just show an alert
    alert('Login attempt recorded. Check console for details.');
});