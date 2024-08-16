import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Edoprod.css";

const Edoprod = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
  
    // { name: 'Data and Analytics Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F1%20Data%20Analytics%20Introduction%2Emp4&referrer=SharePoint&referrerScenario=OpenFile' },
    // { name: 'Fee Schedule Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F2%20Fee%20Schedule%20introduction%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview' },
    // { name: 'Hedis Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F3%20HEDIS%20Introduction%2Emp4&referrer=SharePoint&referrerScenario=OpenFile' },
    // { name: 'Milliman Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F4%20Miliman%20Introduction%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview' },
    // { name: 'AmeriHealth POD Engineering Kickoff', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20Projects%20and%20Tracks%20in%20ACFC/AmeriHealth%20POD%20Engineering%20Kickoff.pptx?d=wc16e9329f6bc4141a95fce55629de2e5&csf=1&web=1&e=sy5y3Z' },
    // { name: 'AmeriHealth Production Support Kickoff', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20Projects%20and%20Tracks%20in%20ACFC/AmeriHealth%20POD%20Engineering%20Kickoff.pptx?d=wc16e9329f6bc4141a95fce55629de2e5&csf=1&web=1&e=sy5y3Z' },
    
    { name: 'Analytical Enablement Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/1%20Analytical%20Enablement%20Introduction.mp4?csf=1&web=1&e=WoarcC' },
    { name: 'Fee Schedule Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/2%20Fee%20Schedule%20introduction.mp4?csf=1&web=1&e=kJlDYL' },
    { name: 'Hedis Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/3%20HEDIS%20Introduction.mp4?csf=1&web=1&e=4tpXWg' },
    { name: 'Milliman Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/4%20Miliman%20Introduction.mp4?csf=1&web=1&e=AWeian' },
    { name: 'AmeriHealth POD Engineering Kickoff', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/AmeriHealth%20POD%20Engineering%20Kickoff.pptx?d=wc16e9329f6bc4141a95fce55629de2e5&csf=1&web=1&e=y8IyuC' },
    { name: 'AmeriHealth Production Support Kickoff', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/1%20Mandatory%20tech-training%20sessions/AmeriHealth%20Production%20Support%20Kickoff.pptx?d=w00acf8349c294849bc3949e45b1ed23c&csf=1&web=1&e=KAdAk3' },



  ];

  const handleFileDisplay = (path) => {
    // window.open(path, '_blank');
    window.location.href = path;
  };

  return (
    <div className="container">
      <div className="buttons-container">
        {files.map((file, index) => (
          <button key={index} className="button" onClick={() => handleFileDisplay(file.path)}>
            {file.name}
          </button>
        ))}
      </div>
      {selectedFile && (
        <div className="file-container">
          {/* Display the selected file based on its type */}
          {selectedFile.endsWith('.png') && <img className="file-display" src={selectedFile} alt="File" />}
          {selectedFile.endsWith('.pptx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.pdf') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.docx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.xlsx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.video') && (
            <video className="file-display" src={selectedFile} controls>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default Edoprod;


