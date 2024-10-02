const apiBaseUrl = "https://luck-royal-drum.glitch.me";

// Função de Login
async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${apiBaseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login bem-sucedido');
            console.log('Token:', data.token); // Armazene o token conforme necessário
        } else {
            alert('Erro no login: ' + data.message);
        }
    } catch (error) {
        console.error('Erro na solicitação de login:', error);
    }
}

// Função de Registro
async function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não correspondem!');
        return;
    }

    try {
        const response = await fetch(`${apiBaseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, confirmPassword })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registro bem-sucedido');
        } else {
            alert('Erro no registro: ' + data.message);
        }
    } catch (error) {
        console.error('Erro na solicitação de registro:', error);
    }
}

// Adicionar os eventos de clique aos botões
document.getElementById('login-btn')?.addEventListener('click', login);
document.getElementById('register-btn')?.addEventListener('click', register);
