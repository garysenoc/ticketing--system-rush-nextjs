import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Login() {
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

      <div className='boxgeneral1'>
        <center>
          <p
            className='textsubhead'
            style={{ paddingTop: '6%' }}
          >
            Password Changed!
          </p>
        </center>
        <center>
          <p className='textsub'>
            Your password has been changed successfully.
          </p>
        </center>
        <Link href={'/login'}>
          <button
            type='submit'
            value='CONFIRM'
            className='submit1'
          >
            CONFIRM
          </button>
        </Link>
      </div>
    </div>
  );
}

