import Head from 'next/head';
import Image from 'next/image';
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
      <div className='boxinstruction'>
        <img
          src='jhslogo.png'
          className='logo1'
        />
        <center>
          <p className='instructions'>
            Please be informed that you would be needing an approved clearance
            form before proceeding to the request form.{' '}
          </p>
        </center>
        <center>
          <p className='instructions'>
            Click the <b>‘CLEARANCE FORM’</b> button to file for clearance. Once
            you have your clearance <b>APPROVED</b>, you may click{' '}
            <b>‘SEE PAYMENT DETAILS’</b> button to proceed with payment.
          </p>
        </center>
        <a
          href
          className='button2'
        >
          CLEARANCE FORM
        </a>
        <a
          href
          className='button2'
        >
          SEE PAYMENT DETAILS
        </a>
        <center>
          <p className='instructions'>
            Already have an approved clearance slip and payment receipt?
          </p>
        </center>
        <a
          href='/requestform'
          className='button3'
          style={{ lineHeight: '30px', paddingTop: '2%' }}
        >
          PROCEED TO REQUEST FORM
        </a>
      </div>
    </div>
  );
}

