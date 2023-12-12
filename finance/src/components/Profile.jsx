import React from 'react';
import Papa from 'papaparse';

const Profile = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      Papa.parse(file, {
        complete: (result) => {
          console.log("Parsed CSV data: ", result.data);
          // Process and distribute data here
        },
        header: true, // Set to false if your CSV doesn't have headers
        skipEmptyLines: true,
        error: (error) => {
          console.error("Error parsing CSV: ", error);
          // Handle parsing error
        }
      });
    } else {
      console.error("Invalid file type. Please upload a CSV file.");
      // Show error message
    }
  };

  return (
    <div className='flex flex-col items-stretch min-h-screen bg-[#000300] text-white'>
      {/* Title Section */}
      <div className='text-center p-4'>
        <p className='text-[#85BB85] font-bold text-lg'>Please upload a Transactions CSV only</p>
      </div>

      {/* File Upload Section */}
      <div className='flex justify-center p-4'>
        <div className='border border-gray-900 shadow-lg p-4'>
          <label htmlFor="csvUpload" className='text-[#85BB85] font-bold'>Upload CSV File:</label>
          <input type="file" id="csvUpload" accept=".csv" onChange={handleFileUpload} className='mt-2' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
