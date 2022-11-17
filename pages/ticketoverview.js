import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState();
  const [id, setId] = useLocalStorage('id', '');

  const getData = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    await axios
      .get(`http://localhost:5000/api/requestForm/get-request-form-by-id/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data?.data?.requestForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeStatus = async (status) => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    await axios
      .patch(
        `http://localhost:5000/api/requestForm/update-request-form/${id}`,
        {
          status: status,
        },
      )
      .then((response) => {
        console.log(response);
        setData(response.data?.data?.requestForm);
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
      <div className='sidedesign'>
        <p>2</p>
      </div>
      <div
        className='textgeneral'
        style={{ marginLeft: '5%', paddingTop: '50px' }}
      >
        <p>Ticket Overview</p>
        <table
          id='table1'
          style={{ fontSize: '20px' }}
        >
          <tbody>
            <tr>
              <th>Ticket Number</th>
              <th>Name</th>
              <th>Student Number</th>
              <th>Email</th>
              <th>Date Created</th>
            </tr>
            <tr>
              <td>01</td>
              <td>{data?.name}</td>
              <td>{data?.studentNumber}</td>
              <td>{data?.email}</td>
              <td>{data?.dateRequested}</td>
            </tr>
          </tbody>
        </table>
        <div className='docureq'>
          <div className='row'>
            <div className='column'>
              <table id='table2'>
                <tbody>
                  <tr>
                    <th>Document Requested</th>
                    <td>{data?.documentRequested}</td>
                  </tr>
                </tbody>
              </table>
              <table id='table2'>
                <tbody>
                  <tr>
                    <th>Approved Clearance Slip</th>
                    <th>
                      <a href={data?.approvalClearanceSlip}>Proof of Payment</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='vl' />
            <div className='column2'>
              <div className='row'>
                <div className='column'></div>
              </div>
              <table id='table2'>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
              <table id='table2'>
                <tbody>
                  <tr>
                    <th>Special requests:</th>
                  </tr>
                  <tr>
                    <td>
                      May I request for this to be processed as soon as possible
                      because I have a deadline on submitting this document to
                      the school I’m applying to.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='vk' />
              <table id='table3'>
                <tbody>
                  <tr>
                    <th>status:</th>
                  </tr>
                  <tr>
                    <th>
                      <select
                        name='status'
                        className='status'
                        onChange={(e) => {
                          changeStatus(e.target.value);
                          getData();
                        }}
                        value={data?.status}
                      >
                        <option value>Please choose an option</option>
                        <option value='Pending'>Pending</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Resolved'>Resolved</option>
                        <option value='Voided'>Voided</option>
                        <option value='Reopened'>Reopened</option>
                      </select>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

