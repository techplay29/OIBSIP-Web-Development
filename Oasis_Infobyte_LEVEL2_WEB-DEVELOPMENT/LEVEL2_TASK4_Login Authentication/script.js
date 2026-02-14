// Toggle between Login and Register
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

// Handle Registration
function handleRegister() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (!name || !email || !pass) return alert("Fill all fields!");

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    if (users.some(u => u.email === email)) return alert("Email already registered!");

    users.push({ name, email, pass });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert("Registration Successful! Please Login.");
    toggleForm();
}

// Handle Login
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        alert(`Welcome Back, ${user.name}!`);
        // In a real app, you'd redirect: window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password!");
    }
}