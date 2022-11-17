import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

export default function Login() {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [id, setId] = useLocalStorage('id', '');

  const submit = async () => {
    if (password1 !== password2) {
      alert('Please have the same password. Thank you');
    } else {
      await axios
        .patch(`http://localhost:5000/api/admin/update-admin/${id}`, {
          password: password1,
        })
        .then(
          (response) => {
            console.log(response);
            if (response?.status == '200') {
              alert('valid');
              // console.log(response.data.data.adminAccount._id);
              setId(response.data.data.adminAccount._id);
              window.location.replace('/forgotpassword3');
            }
          },
          (error) => {
            alert('Invalid credential. Please try again');
            console.log('error ' + error);
          },
        );
    }
  };

  useEffect(() => {
    if (id == '' || id == null) {
      window.location.replace('/login');
    }

    console.log(id);
  }, []);

  return (
    <div style={{ margin: '0%' }}>
      <div className='topbar'>
        <img
          src='ustlogoedited.png'
          style={{ height: '90%' }}
        />
      </div>

      <a href='/forgot-password1'>
        {' '}
        <img
          src='left arrow.png'
          style={{ height: '80px', marginTop: '5%', marginLeft: '1.5%' }}
          className='imgback'
        />{' '}
      </a>

      <br />
      <br />

      <div className='boxgeneral'>
        <div
          className='forgotpassword'
          style={{ marginTop: '40px', fontSize: '30px' }}
        >
          Your password must have the following:
        </div>
        <div
          className='forgotpassword'
          style={{ marginLeft: '60px', fontSize: ' 30px' }}
        >
          <li>6 characters long</li>
        </div>
        <div
          className='forgotpassword'
          style={{ marginLeft: '60px', fontSize: ' 30px' }}
        >
          <li>One numerical character</li>
        </div>
        <div
          className='forgotpassword'
          style={{ marginLeft: '60px', fontSize: ' 30px' }}
        >
          <li>One special character</li>
        </div>
        <div
          className='forgotpassword'
          style={{ marginLeft: '60px', fontSize: ' 30px' }}
        >
          <li>One uppercase character</li>
        </div>

        <br />
        <br />
        <br />
        <forms>
          <div className='forgotpassword'>Enter your new password</div>
          <input
            type='text'
            className='forms3'
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
            value={password1}
          />
        </forms>
        <forms>
          <div className='forgotpassword'>Re-enter your new password</div>
          <input
            type='text'
            className='forms3'
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            value={password2}
          />
        </forms>
        {/* <Link href={'/forgotpassword3'}> */}
        <button
          type='submit'
          value='CONFIRM'
          className='submit1'
          onClick={() => {
            submit();
          }}
        >
          CONFIRM
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

