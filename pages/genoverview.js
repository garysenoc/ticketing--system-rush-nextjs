import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState();
  const [id, setId] = useLocalStorage('id', '');

  const [openNumber, setOpenNumber] = useState(0);
  const [resolvedNumber, setResolvedNumber] = useState(0);
  const [voidedNumber, setVoidedNumber] = useState(0);
  const [reopenedNumber, setReopenedNumber] = useState(0);

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/requestForm/get-all-request-form`)
      .then((response) => {
        //console.log(response.data.data.requestForm);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();

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
      <br />
      <br />
      <div
        className='sidedesign'
        style={{ marginTop: '4.2%' }}
      >
        <img
          src='threedots.png'
          style={{ height: '5%' }}
        />
      </div>
      <div
        className='textgeneral '
        style={{ marginLeft: '5%', paddingTop: '50px' }}
      >
        <p>Performance Report</p>
        <div className='performbox'>
          <forms>
            <div className='minibox1'>{data?.openNumber}</div>
            <div className='minibox2'>Open</div>
          </forms>
          <forms>
            <div className='minibox1'>{data?.resolveNumber}</div>
            <div className='minibox2'>Resolved</div>
          </forms>
          <forms>
            <div className='minibox1'>{data?.voidedNumber}</div>
            <div className='minibox2'>Voided</div>
          </forms>
          <forms>
            <div className='minibox1 '>{data?.reopenedNumber}</div>
            <div className='minibox2 '>Reopened {}</div>
          </forms>
        </div>
        <table className='graph'>
          <thead>
            <tr>
              <th scope='col'>Item</th>
              <th scope='col'>Percent</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                height: `${Math.round(
                  (data?.openNumber / data?.requestForm.length) * 100,
                )}%`,
              }}
            >
              <td style={{ backgroundColor: '#75BAE0' }}>
                <clr1>
                  <span>
                    {' '}
                    {Math.round(
                      (data?.openNumber / data?.requestForm.length) * 100,
                    )}
                    %
                  </span>
                </clr1>
              </td>
              <th>OPEN</th>
            </tr>
            <tr
              style={{
                height: `${Math.round(
                  (data?.resolveNumber / data?.requestForm.length) * 100,
                )}%`,
              }}
            >
              <td style={{ backgroundColor: '#5DBD55' }}>
                <span>
                  {' '}
                  {Math.round(
                    (data?.resolveNumber / data?.requestForm.length) * 100,
                  )}
                  %
                </span>
              </td>
              <th>RESOLVED</th>
            </tr>
            <tr
              style={{
                height: `${Math.round(
                  (data?.voidedNumber / data?.requestForm.length) * 100,
                )}%`,
              }}
            >
              <td style={{ backgroundColor: 'red' }}>
                <span>
                  {' '}
                  {Math.round(
                    (data?.voidedNumber / data?.requestForm.length) * 100,
                  )}
                  %
                </span>
              </td>
              <th>VOIDED</th>
            </tr>
            <tr
              style={{
                height: `${Math.round(
                  (data?.reopenedNumber / data?.requestForm.length) * 100,
                )}%`,
              }}
            >
              <td style={{ backgroundColor: 'yellow' }}>
                <span>
                  {Math.round(
                    (data?.reopenedNumber / data?.requestForm.length) * 100,
                  )}
                  %
                </span>
              </td>
              <th>REOPENED</th>
            </tr>
          </tbody>
        </table>
        <table
          id='table1'
          style={{ fontSize: '20px' }}
        >
          <tbody>
            <tr>
              <th>Ticket Number</th>
              <th>Name</th>
              <th>Document</th>
              <th>Date Created</th>
              <th>Status</th>
              <th />
            </tr>

            {data?.requestForm?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.documentRequested}</td>
                  <td>{item.dateRequested}</td>
                  <td>{item.status}</td>
                  <td>
                    <a
                      href={`/ticketoverview?id=${item._id}`}
                      className='viewbtn'
                    >
                      view
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

