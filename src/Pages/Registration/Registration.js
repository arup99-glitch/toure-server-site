import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import './Registration.css';
import initializeAuthentication from '../Login/Firebase/Firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function Registration() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long')
      return;
    }

    isLogin ? processLogin(email, password) : createNewUser(email, password);
  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  return (
    <div className="mx-5">
      <br />
      <br />

      <form className="border bg-info p-5" onSubmit={handleRegistration}>
        <h3 className="text-primary"> Please {isLogin ? 'Login' : 'Register'}</h3>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input onBlur={handleEmailChange} type="email" class="form-control bg-light" id="inputEmail3" required />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" class="form-control bg-light" id="inputPassword3" required />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input onChange={toggleLogin} class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
               Already registered?
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-3 text-danger">{error}</div>
        <button type="submit" class="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Registration;