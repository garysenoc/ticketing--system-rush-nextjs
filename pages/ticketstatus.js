import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState();

  const getData = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    await axios
      .get(`http://localhost:5000/api/requestForm/get-request-form/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data.requestForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
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
      <div className='sidedesign'>
        <p>2</p>
      </div>
      <div
        className='textgeneral'
        style={{ marginLeft: '5%', paddingTop: '50px' }}
      >
        <p>Ticket Status</p>
        <table
          id='table1'
          style={{ fontSize: '20px' }}
        >
          <tbody>
            <tr>
              <th>Ticket Number</th>
              <th>Date Submitted</th>
              <th>Type of Document</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{data?.dateRequested}</td>
              <td>{data?.deliveryOption}</td>
              <td>{data?.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

