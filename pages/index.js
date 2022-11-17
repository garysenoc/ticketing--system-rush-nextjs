import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useLocalStorage from 'use-local-storage';
import { useEffect } from 'react';

export default function Home() {
  const [username, setUsername] = useLocalStorage('name', 'hello');

  useEffect(() => {
    setUsername('hello');
    console.log(username);
  }, []);

  return (
    <div style={{ margin: '0%', maxHeight: 'fit-content' }}>
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
            style={{ textAlign: 'center' }}
          >
            JHS : StuD ReqTics
          </p>
        </center>
        <a
          href='/instructions'
          className='button1'
        >
          REQUEST TICKET
        </a>
        <br className='br1' />
        <a
          href='/login'
          className='button1'
        >
          ADMIN LOGIN
        </a>
        <br className='br1' />
        <a
          href='/tracking'
          className='button1'
        >
          VIEW TICKET
        </a>
        <br className='br1' />
      </div>
    </div>
  );
}

