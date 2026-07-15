import React, { useState } from 'react';
import { registerUser } from '../../api/authApi';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up (Auth API)</h2>
      <form onSubmit={handleSubmit}>
        <input style={inputStyle} type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input style={inputStyle} type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input style={inputStyle} type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button style={btnStyle} type="submit">Register</button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'blue' }}>{message}</p>}
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', margin: '8px 0', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };