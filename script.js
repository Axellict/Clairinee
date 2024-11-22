document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form mengirim data secara default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (username === 'admin' && password === '12345') {
        alert('Login berhasil!');
        window.location.href = 'index.html'; // Mengarahkan ke halaman index
    } else {
        alert('Username atau password salah.');
    }
});
