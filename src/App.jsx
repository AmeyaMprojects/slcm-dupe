import React from 'react';
import './App.css';

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
    <div className="app">
      <div className="Noti">
        <h3  className='notification'>Notifications</h3>
      </div>
      <a href="https://slcm.manipal.edu/UplodedFilePath/EMI_Monthly_Fee_MAHE.pdf" className="hyperlink-1">👉 Introduction of EMI (Monthly) Fee Payment Option for Senior Students at MAHE</a>
      <a href="link_to_hostel_policy"  className="hyperlink-1">👉 Hostel allotment policy for seniors 2024-25 - Revised</a>
      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div> */}

      <table className="table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {/* Table content will be populated dynamically */}
        </tbody>
      </table>
    </div>
  );
}

export default App;

