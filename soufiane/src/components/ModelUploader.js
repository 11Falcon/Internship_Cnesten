import React, { useState } from 'react';
import axios from 'axios';


const ModelUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/uploadModal', formData);
        console.log(response.data); // Server response
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className='uploading'>
      <h1 style={{color:'green'}}>Uploading your Model</h1>
      <input className='upload' type="file" onChange={handleFileChange} />
      <button className='up_file' onClick={handleUpload}>Upload File</button>
    </div>
  );
};
export default ModelUploader;