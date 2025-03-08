import React from 'react';
import './App.css';
// import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
// import { FaFire, FaPoo } from 'react-icons/fa';

function App() {
  const data = [
    {
      event: 'BROADCAST',
      subject: 'MIT BLR 23-24 BATCH REVISED FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25',
      type: 'Important Document',
      details: '' 
    },
  ];

  return (
    <>
    
    <div className="app">
      
      
      <div className="Noti">
        <h3  className='notification'>Notifications</h3>
      </div>
      <a href="https://slcm.manipal.edu/UplodedFilePath/EMI_Monthly_Fee_MAHE.pdf" className="hyperlink-1">👉 Introduction of EMI (Monthly) Fee Payment Option for Senior Students at MAHE</a>
      <a href="https://slcm.manipal.edu/UplodedFilePath/Hostel_allotment_policy_for_seniors_2024-25.pdf"  className="hyperlink-1">👉 Hostel allotment policy for seniors 2024-25 - Revised</a>


      <table className="table">
        <thead>
          <tr>
            <td>Event</td>
            <td>Subject</td>
            <td>Type</td>
            <td className='details'>Details</td>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>MIT BLR 23-24 BATCH REVISED FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25</th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>BANK DETAILS FOR USD PAYMENT</th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>MIT BLR BTEC 23-24 BATCH ECE FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25</th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>MMIT BLR NRI 2 FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25 </th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th> 	MIT BLR GEN 3 FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25 </th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>MIT BLR NRI 1 FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25 </th>
            <th>Important Document</th>
            <th></th>
          </tr>
          <tr>
            <th>BROADCAST</th>
            <th>MIT BLR GEN 2 FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25 </th>
            <th>Important Document</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {/* Table content will be populated dynamically */}
        </tbody>
      </table>
    </div>
    </>
  );
}


export default App;

