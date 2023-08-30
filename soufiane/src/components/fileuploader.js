import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData);
        console.log(response.data); // Server response
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className='uploading'>
      <h1 style={{color:'green'}}>Uploading your data</h1>
      <input className='upload' type="file" onChange={handleFileChange} />
      <button className='up_file' onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;

// import React, { useState } from 'react';

// const FileUploadAndDownload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileDownload = () => {
//     if (selectedFile) {
//       const downloadLink = document.createElement('a');
//       downloadLink.href = URL.createObjectURL(selectedFile);
//       downloadLink.download = selectedFile.name;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     }
//   };

//   return (
//     <div>
//       <h2>File Upload and Download</h2>
//       <input type="file" onChange={handleFileUpload} />
//       <button onClick={handleFileDownload} disabled={!selectedFile}>
//         Download File
//       </button>
//     </div>
//   );
// };

// export default FileUploadAndDownload;

// // import React, { useState } from "react";

// // function FileUploader() {
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleUpload = () => {
// //     if (selectedFile) {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         const fileContent = event.target.result;
// //         localStorage.setItem("uploadedFile", fileContent);
// //         console.log("File uploaded successfully!");
// //       };
// //       reader.readAsDataURL(selectedFile);
// //     }
// //   };

// //   const handleDownload = () => {
// //     const fileContent = localStorage.getItem("uploadedFile");
// //     if (fileContent) {
// //       const blob = new Blob([fileContent]);
// //       const link = document.createElement("a");
// //       link.href = URL.createObjectURL(blob);
// //       link.download = selectedFile.name;
// //       link.click();
// //       URL.revokeObjectURL(link.href);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>File Uploader and Downloader</h2>
// //       <input type="file" onChange={handleFileChange} />
// //       <button onClick={handleUpload}>Upload File</button>
// //       <button onClick={handleDownload}>Download File</button>
// //     </div>
// //   );
// // }

// // export default FileUploader;

// // // import React, { useState } from "react";
// // // import { BounceLoader } from "react-spinners";
// // // import { jsx, css, Global, ClassNames } from '@emotion/react'


// // // const loaderCSS = jsx`
// // //   margin-top: 25px;
// // //   margin-bottom: 25px;
// // //   display : flex;
// // //   `

// // // export default function FileUploader(){
// // //     const [file,setFile] = useState()
// // //     function handleFile(event){
// // //         setFile(event.target.files[0])
// // //         console.log(file)
// // //     }
// // //     return(
// // //         <div>


// // //             <h2 jsx={{ color: 'hotpink' }}>File Uploading</h2>
// // //             <form csx={{ color: 'hotpink' }}>
// // //                 <input type="file" name="file" onChange={handleFile} className="ash"/>
// // //                 <BounceLoader css={loaderCSS} size={40} color="red" loading/>
// // //             </form>
// // //         </div>
// // //     )
// // // }