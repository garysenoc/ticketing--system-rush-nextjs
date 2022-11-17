import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [referenceId, setReferenceId] = useState('');

  const submit = async () => {
    axios
      .post('http://localhost:5000/api/requestForm/checkRequestForm', {
        referenceId: referenceId,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data.data.requestForm.length > 0) {
            alert('Found existing reference id');
            window.location.replace(`/ticketstatus?id=${referenceId}`);
          } else {
            alert('No existing reference id');
          }
        },
        (error) => {
          console.log(error);
        },
      );
  };

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
      <div className='boxgeneral'>
        <img
          src='jhslogo.png'
          className='logo1'
        />
        <center>
          <p
            className='textgeneral'
            style={{ fontWeight: 10 }}
          >
            Enter Tracking Number:
          </p>
        </center>

        <input
          type='text'
          className='forms1'
          onChange={(e) => {
            setReferenceId(e.target.value);
          }}
          value={referenceId}
        />
        {/* <Link href={'/ticketstatus'}> */}
        <button
          type='submit'
          name='View Ticket'
          className='submit1'
          onClick={() => {
            submit();
          }}
        >
          View Ticket
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

