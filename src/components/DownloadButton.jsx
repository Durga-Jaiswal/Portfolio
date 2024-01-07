import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";

const DownloadResumeButton = () => {
  const handleDownload = () => {
   
    const resumeFileName = "Durga Jaiswal's.pdf";
    const resumeFilePath = `./assets/${resumeFileName}`;

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = resumeFileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} >
    <FaRegFileAlt className="file-icon" />
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
