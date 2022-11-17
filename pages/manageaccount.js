import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

export default function Login() {
  const [id, setId] = useLocalStorage('id', '');

  const [data, setData] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/admin/get-admin/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data.adminAccount);
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
        <p>Manage Account</p>
        <div
          onClick={() => {
            window.location.replace('/edit-profile');
          }}
        >
          Edit
        </div>
        <div
          onClick={() => {
            window.location.replace('/forgotpassword2');
          }}
        >
          Reset password
        </div>
        <div
          onClick={async () => {
            if (
              confirm('Are you sure you want to delete this profile!') == true
            ) {
              await axios
                .delete(`http://localhost:5000/api/admin/delete-admin/${id}`)
                .then((response) => {
                  console.log(response);
                  window.location.replace('/login');
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              console.log('no');
            }
          }}
        >
          Delete
        </div>
        <div
          className='boxprofile'
          style={{ fontSize: '20px' }}
        >
          <div className='clearpic'>
            <img
              src='emptypicture.png'
              style={{ width: '100%' }}
            />
          </div>
          <div className='manageacc'>
            <div className='adminame'>{data?.name}</div>
            <div className='adminsub'>{data?.jobTitle}</div>
            <div className='aline'> </div>
            <div className='adminsub'>{data?.email}</div>
          </div>
          <div className='settingsicon'>
            <img
              src='threedots.png'
              style={{ width: '100%' }}
            />
          </div>

          <div
            className='asettings'
            style={{ zIndex: 100000 }}
          >
            <div className='adminsub'>edit user</div>
            <div className='adminsub'>Reset Password</div>
            <div
              className='adelete'
              style={{ zIndex: 100000 }}
              onClick={() => {
                alert('hello');
              }}
            >
              Delete Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

