import React, { useState } from 'react';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      setLoggedIn(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setLoggedIn(true);
    } else {
      alert('Ingresa un usuario y contraseña válidos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Bienvenido, {username}!</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <h1>Registrarse</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Registro;
