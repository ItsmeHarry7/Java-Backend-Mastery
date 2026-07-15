import React, { useState } from 'react';
import { loginUser } from '../../api/authApi';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      // Save token to localStorage upon successful authentication
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login (Auth API)</h2>
      <form onSubmit={handleSubmit}>
        <input style={inputStyle} type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input style={inputStyle} type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button style={btnStyle} type="submit">Log In</button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'blue' }}>{message}</p>}
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', margin: '8px 0', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', cursor: 'pointer' };