import React, { useState } from 'react';
import style from "./Auth.css"

const Signup = ({ changeView }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Mock user storage (in a real app, you would use a backend)
    const mockUsers = [];

    const handleSignup = (e) => {
        e.preventDefault();

        // Simple validation to check for existing user
        const userExists = mockUsers.find(user => user.email === email);
        if (userExists) {
            setError('This email is already registered.');
            setSuccess('');
            return;
        }

        // Create a new user
        const newUser = { username, email, password };
        mockUsers.push(newUser); // Store the user (in a real app, you would send this to a backend)

        setSuccess('Account created successfully! You can now log in.');
        setError('');

        // Navigate to the login page after signup
        changeView('login'); // Redirect to login
    };

    return (
        <div className="signup">
            <h1>Create an Account</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message display */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Success message display */}
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <button onClick={() => changeView('login')}>Login here</button>.
            </p>
            <button onClick={() => changeView('home')}>Go back to Home</button>
        </div>
    );
};

export default Signup;
