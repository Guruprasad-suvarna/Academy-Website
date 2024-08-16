// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Project.css";

// const Project = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
  
//   const files = [
//     { name: 'Amerihealth Introduction', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/01%20ACFC%20Overview/Amerihealth%20Introduction.pptx?d=wfb2177915a564089aa7e6b3f313521f7&csf=1&web=1&e=bgkXaw' },
//     { name: 'Overview', type: 'word', path: 'https://hexawareonline.sharepoint.com/:w:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/01%20ACFC%20Overview/overview.docx?d=w7b8f636447c04001bdc3cfc6629b6f71&csf=1&web=1&e=JuMVpU' }
//   ];

//   const handleFileDisplay = (path) => {
//     // window.open(path, '_blank');//for the page to be loaded in new tab
//     window.location.href = path;
    
//   };

//   return (
//     <div className="container">
//       <div className="buttons-container">
//         {files.map((file, index) => (
//           <button key={index} className="button" onClick={() => handleFileDisplay(file.path)} >
//             {file.name}
//           </button>
//         ))}
      
//       {selectedFile && (
//         <div className="file-container">
//           {/* Display the selected file based on its type */}
//           {selectedFile.endsWith('.png') && <img className="file-display" src={selectedFile} alt="File" />}
//           {selectedFile.endsWith('.pptx') && <iframe className="file-display" src={selectedFile} title="File" />}
//           {selectedFile.endsWith('.pdf') && <iframe className="file-display" src={selectedFile} title="File" />}
//           {selectedFile.endsWith('.docx') && <iframe className="file-display" src={selectedFile} title="File" />}
//           {selectedFile.endsWith('.xlsx') && <iframe className="file-display" src={selectedFile} title="File" />}
//           {selectedFile.endsWith('.video') && (
//             <video className="file-display" src={selectedFile} controls>
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </div>
//       )}
//       </div>
//     </div>
//   );
// };

// export default Project;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    {
      name: 'Amerihealth Introduction',
      type: 'ppt',
      path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/01%20ACFC%20Overview/Amerihealth%20Introduction.pptx?d=wfb2177915a564089aa7e6b3f313521f7&csf=1&web=1&e=bgkXaw',
      snippet: 'AmeriHealth Caritas Family of Companies (ACFC), a leading Medicaid managed care organization, headquartered in Newtown Square, PA, that provides access to health care products and services to underserved communities across the United States.'
    },
    {
      name: 'Overview',
      type: 'word',
      path: 'https://hexawareonline.sharepoint.com/:w:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/01%20ACFC%20Overview/overview.docx?d=w7b8f636447c04001bdc3cfc6629b6f71&csf=1&web=1&e=JuMVpU',
      snippet: 'ACFC A leader in Health Care Solution with a networth of $6.5 B '
    }
  ];

  const handleFileDisplay = (path) => {
    // window.location.href = path;
    window.open(path, '_blank');
  };

  return (
    <div className="container">
      <div className="buttons-container">
        {files.map((file, index) => (
          <div key={index} className="file-section">
            <h3 style={{color:"#3879b3",marginLeft:"200px",fontWeight:"bold"}}>{file.name}</h3>
            <div className="snippet-container">
                <p className="snippetclr">{file.snippet}</p>
            </div>
            <button className="button" onClick={() => handleFileDisplay(file.path)}style={{marginLeft:"170px"}}>
              Read More
            </button>
          </div>
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

export default Project;
