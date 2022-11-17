import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

export default function Login() {
  const [adminName, setAdminName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useLocalStorage('id', '');

  const [data, setData] = useState();

  const submit = async () => {
    axios
      .patch(`http://localhost:5000/api/admin/update-admin/${id}`, {
        name: adminName,
        jobTitle: jobTitle,
        email: email,
      })
      .then(
        (response) => {
          alert('Successful update. Thank you');
          console.log(response);
          window.location.replace('/manageaccount');
        },
        (error) => {
          console.log(error);
        },
      );
  };

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/admin/get-admin/${id}`)
      .then((response) => {
        console.log(response.data.data.adminAccount);
        setData(response.data.data.adminAccount);
        setAdminName(response.data.data.adminAccount?.name);
        setJobTitle(response.data.data.adminAccount?.jobTitle);
        setEmail(response.data.data.adminAccount?.email);
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
      <div
        className='sidedesign'
        style={{ marginTop: '4.2%' }}
      >
        <p>2</p>
      </div>

      <div
        className='textgeneral'
        style={{
          marginLeft: '5%',
          paddingTop: '50px',
          position: 'flex',
          textAlign: 'left',
        }}
      >
        <p>Profile</p>
        <input
          type='text'
          id='username'
          name='username'
          className='forms2'
          placeholder='Admin Name'
          onChange={(e) => {
            setAdminName(e.target.value);
          }}
          value={adminName}
        />
        <br />
        <input
          type='text'
          id='jobtitle'
          name='jobtitle'
          className='forms2'
          placeholder='Job title'
          onChange={(e) => {
            setJobTitle(e.target.value);
          }}
          value={jobTitle}
        />
        <br />
        <input
          type='text'
          id='email'
          name='email'
          className='forms2'
          placeholder='adminemail@gmail.com'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <button
          onClick={() => {
            submit();
          }}
          className='forms2'
        >
          Update
        </button>
      </div>
      <div
        className='boxprofile'
        style={{ fontSize: '20px' }}
      >
        <form>
          <label
            htmlfor='username'
            className='textprofile'
          >
            {' '}
            Name:
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className='forms2'
            placeholder='Admin Name'
          />
        </form>
        <form>
          <label
            htmlFor='jobtitle'
            className='textprofile'
          >
            Job Title:
          </label>
          <input
            type='text'
            id='jobtitle'
            name='jobtitle'
            className='forms2'
            placeholder='Admin'
          />
        </form>
        <form>
          <label
            for='email'
            className='textprofile'
          >
            Email Address:
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='forms2'
            placeholder='adminemail@gmail.com'
          />
        </form>
      </div>
    </div>
  );
}

