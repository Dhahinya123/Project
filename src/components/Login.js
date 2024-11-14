import React, { useState } from 'react';

const Login = ({ changeView, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const mockUser = {
        email: 'dhahinya@gmail.com',
        password: '123456',
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === mockUser.email && password === mockUser.password) {
            onLogin(); // Notify parent of successful login
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="login">
            <h1>Login to Your Account</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <button onClick={() => changeView('signup')}>Sign up here</button>.
            </p>
            <button onClick={() => changeView('home')}>Go back to Home</button>
        </div>
    );
};

export default Login;
