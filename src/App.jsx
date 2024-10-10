import React from 'react';
import './App.css';

function App() {
  const data = [
    {
      event: 'BROADCAST',
      subject: 'MIT BLR 23-24 BATCH REVISED FEE NOTIFICATION & SCHEDULE FOR THE ACADEMIC YEAR 2024-25',
      type: 'Important Document',
      details: '' // Add details if available
    },
    // ... other data entries
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    const filteredResults = data.filter((item) => {
      return item.subject.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Update the table content dynamically
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    if (filteredResults.length > 0) {
      filteredResults.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.event}</td>
          <td>${item.subject}</td>
          <td>${item.type}</td>
          <td>${item.details}</td>
        `;
        tableBody.appendChild(row);
      });
    } else {
      const row = document.createElement('tr');
      row.innerHTML = '<td colspan="4">No results found.</td>';
      tableBody.appendChild(row);
    }
  };

  return (
    <div className="app">
      <h2 className="header">Introduction of EMI (Monthly) Fee Payment Option for Senior Students at MAHE</h2>
      <h3 className="header">Hostel allotment policy for seniors 2024-25 - Revised</h3>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>

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