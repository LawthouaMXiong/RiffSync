import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fakeAccounts from '../components/fakeAccounts';
import '../components/home.css';

export default function Home() {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [instrument, setInstrument] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [genre, setGenre] = useState('');
  const [skillLevel, setSkillLevel] = useState('Beginner');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const navigate = useNavigate();

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: fakeAccounts.length + 1,
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      instrument: instrument,
      subcategory: subcategory,
      genre: genre,
      skillLevel: skillLevel,
    };

    fakeAccounts.push(newUser);

    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setInstrument('');
    setSubcategory('');
    setGenre('');
    setSkillLevel('Beginner');

    console.log('User signed up:', newUser);

    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/profile');
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const user = fakeAccounts.find(account => account.email === loginEmail && account.password === loginPassword);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/profile');
    } else {
      alert('Invalid login credentials');
    }
  };


  return (
    <div className="home">
      <h1 className="text-3xl font-bold underline">RiffSync Home</h1>
      <div className="container">
        <h2 className="signup-title">Signup</h2>
        <form onSubmit={handleSignupSubmit} className="form-space">
          <label>
            Name:
            <input type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Password:
            <input type="text" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Instrument:
            <input type="text" value={instrument} onChange={(e) => setInstrument(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Subcategory:
            <input type="text" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Genre:
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Skill Level:
            <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
              <option value="Professional">Professional</option>
              <option value="God Tier">God Tier</option>
            </select>
          </label>
          <br />
          <button type="submit" className="submit-button">Signup</button>
      </form>
    </div>


    <div className="container">
        <h2 className="signup-title">Login</h2>
        <form onSubmit={handleLoginSubmit} className="form-space">
          <label>
            Email:
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="input-field" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="input-field" />
          </label>
          <br />
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>

      <Link to="/search" className="link">Go to Search Page</Link>
    </div>
  );
}
