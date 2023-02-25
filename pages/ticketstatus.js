import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Mainlayout from "components/Layout/Mainlayout";

export default function Login() {
  const [data, setData] = useState();

  // const getData = async () => {
  //   const params = new URLSearchParams(window.location.search);
  //   const id = params.get("id");
  //   await axios
  //     .get(`http://localhost:5000/api/requestForm/get-request-form/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data.data.requestForm);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Mainlayout className="self-start mr-auto">
      <h1 className="my-4 text-3xl font-bold ml-6">Ticket Status</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-neutral-200 text-sm">
          <thead className="bg-tertiary-500">
            <tr>
              <th className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-neutral-900">
                Ticket Number
              </th>
              <th className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-neutral-900">
                Date Submitted
              </th>
              <th className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-neutral-900">
                Type of Document
              </th>
              <th className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-neutral-900">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y bg-tertiary-200 divide-gray-200 mt-2">
            <tr className="hover:bg-gray-200">
              <td className="whitespace-nowrap px-4 py-2.5 first-of-type:font-semibold text-neutral-900">
                1
              </td>

              <td className="whitespace-nowrap px-4 py-2.5 first-of-type:font-semibold text-neutral-900">
                {data?.dateRequested}
              </td>

              <td className="whitespace-nowrap px-4 py-2.5 first-of-type:font-semibold text-neutral-900">
                {data?.deliveryOption}
              </td>

              <td className="whitespace-nowrap px-4 py-2.5 first-of-type:font-semibold text-neutral-900">
                {data?.status}
              </td>
            </tr>
          </tbody>
        </table>
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
</div> */
}
