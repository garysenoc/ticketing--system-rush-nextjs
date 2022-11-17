import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useLocalStorage('name', '');
  const [id, setId] = useLocalStorage('id', '');

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit = async () => {
    await axios
      .post('http://localhost:5000/api/admin/login-admin', {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          if (response?.status == '200') {
            alert('valid');
            console.log(response.data.data.adminAccount._id);
            setId(response.data.data.adminAccount._id);
            window.location.replace('/genoverview');
          }
        },
        (error) => {
          alert('Invalid credentials. Please try again');
          console.log('error ' + error);
        },
      );
  };

  useEffect(() => {
    setId('');
  }, []);
  return (
    <div style={{ margin: '0%' }}>
      <div className='topbar'>
        <img
          src='ustlogoedited.png'
          style={{ height: '90%' }}
        />
      </div>
      <br />
      <br />
      <div
        className='boxgeneral'
        style={{ height: '700px' }}
      >
        <img
          src='jhslogo.png'
          className='logo1'
          style={{ height: '30%' }}
        />
        <center>
          <p
            className='textgeneral'
            style={{ textAlign: 'center' }}
          >
            JHS : StuD ReqTics
          </p>
        </center>

        <label
          htmlFor='username'
          className='textform'
          style={{ fontSize: '25px' }}
        >
          Username
        </label>
        <br />
        <input
          type='email'
          id='name'
          name='name'
          className='login'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label
          htmlFor='password'
          className='textform'
          style={{ fontSize: '25px' }}
        >
          Password
        </label>
        <br />
        <input
          type='password'
          id='name'
          name='name'
          className='login'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />

        <button
          defaultValue='Login'
          className='submit2'
          onClick={() => {
            submit();
          }}
        >
          Login
        </button>

        <Link href={'/forgot-password1'}>
          <a
            href='../html/forgotpasswordone.html'
            style={{ textDecoration: 'none' }}
          >
            <p
              className='textgeneral'
              style={{ fontSize: '23px', marginLeft: '30px' }}
            >
              Forgot Password?
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}

