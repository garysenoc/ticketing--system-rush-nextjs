import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";
import useLocalStorage from "use-local-storage";
import axios from "axios";
import Mainlayout from "components/Layout/Mainlayout";
import Logo from "public/7310454.jpg";
import { FaEllipsisH } from "react-icons/fa";
import UnstyledButton from "components/UI/Buttons/UnstyledButton";
import { Menu } from "@headlessui/react";

export default function Login() {
  const [id, setId] = useLocalStorage("id", "");

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

    if (id == "" || id == null) {
      // window.location.replace("/login");
    }

    console.log(id);
  }, []);
  return (
    <Mainlayout className="self-start flex-1">
      <h1 className="my-4 text-3xl font-bold ml-6">Manage Accounts</h1>

      <div className="relative mt-6 py-8 px-12 rounded-lg bg-primary-500 flex gap-8 text-secondary-800">
        <MenuDropdown />
        <div className="relative w-36 h-36 rounded-full overflow-hidden">
          <Image src={Logo} alt="" className="object-cover" fill />
        </div>
        <div>
          <h2 className="text-4xl font-bold  mb-4">Admin Name</h2>
          <h3 className="font-semibold">Job Title</h3>
          <div className="w-full h-[1px] bg-secondary-800 my-2"></div>
          <h3 className="font-semibold">email</h3>
        </div>
      </div>
    </Mainlayout>
  );
}

{
  /* <div style={{ margin: '0%' }}>
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
</div> */
}

const MenuDropdown = () => {
  const [show, setShow] = useState(false);
  const toggle = useCallback(() => setShow((state) => !state), []);

  return (
    <div>
      <UnstyledButton className="absolute top-2 right-5" onClick={toggle}>
        <FaEllipsisH className="w-8 h-8" />
      </UnstyledButton>
      {show && (
        <div className="absolute top-14 flex flex-col items-start rounded-md right-5 bg-tertiary-300 p-4">
          <UnstyledButton>Edit User</UnstyledButton>
          <UnstyledButton>Reset Password</UnstyledButton>
          <UnstyledButton>
            <span className="border-b border-red-600 text-red-600">
              Delete User
            </span>
          </UnstyledButton>
        </div>
      )}
    </div>
  );
};
