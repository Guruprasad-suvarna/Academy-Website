// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { Outlet, Link } from "react-router-dom";


// import "./SideNav.css";

// const SideNav = () => {
//   return (
//     <div className="app-side-nav ">
//       <nav className="side-nav-content">
//         <ul className="nav-list">
//           <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-home  px-2"></i>
//             ACFC Overview
//           </button>

//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/project" className="dropdown-item">
//                 DL 2.0 Migration Project
//               </a>
//               <a href="/dashboard/onboardingAccess" className="dropdown-item">
//               Onboarding Access-Citrix 
//               </a>

//               <a href="/dashboard/hedis" className="dropdown-item">
//                 HEDIS
//               </a>

//               <a href="/dashboard/introduction" className="dropdown-item">
//                 Amerihealth Intro PPTX
//               </a>
//             </li>
//           </ul>

//           <br></br>
//           <br></br>
//           <br></br>

//           <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-file-circle-plus px-2"></i>
//             Project And Track
//           </button>

//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/edoprod" className="dropdown-item">
//                 EDO-Prod Support
//               </a>

//               <a href="/dashboard/edo_pod_engg" className="dropdown-item">
//                 EDO-POD Engg
//               </a>

//               <a href="/dashboard/digital" className="dropdown-item">
//                 Digital
//               </a>

//               <a href="/dashboard/teamRecordings" className="dropdown-item">
//               Team Recordings
//               </a>
//             </li>
//           </ul>

//           <br></br>
//           <br></br>
          

//           <li className="nav-list-item">
//             <i class="fa-solid fa-chair"></i>

//             <span>
//               <Link to="/dashboard/domain">Domain Foundation</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>

//             <span>
//               <Link to="/dashboard/mandatoryTrain">Mandatory Trainings</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>

//             <span>
//               <Link to="/dashboard/mavericksTrain">Mavericks Training</Link>
//             </span>
//           </li>

//           <br></br>
          

//           <li className="nav-list-item">
//             <i class="fa-solid fa-users"></i>

//             <span>
//               <Link to="/dashboard/onboarding">Onboarding</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

          

//           <br></br>
//           <br></br>
           
          
//         </ul>
//         <ul className="bottom-nav-list">
  
//   <li className="bottom-nav-list-item">
//     <a href="https://tensaigpt.hexaware.com/" target="_blank" rel="noopener noreferrer">
//       <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe" alt="Tensai GPT Icon" />
//       {/* for icon name  */}
//     </a>
//   </li>
// </ul>


//       </nav>

//       <Outlet />
//     </div>
//   );
// };

// export default SideNav;





 
// import { Outlet, Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
 
// import "./SideNav.css";
// import AnimatedExample from "../../pages/ProgressBar";
// import CustomProgressBar from "../../pages/ProgressBar";
// import ProgressBar from "../../pages/ProgressBar";
// import { progress } from "framer-motion";

// const SideNav = () => {
//   const [currentProgress, setCurrentProgress] = useState(0);
  
//   useEffect(() => {
//     // Check if progress state is stored in localStorage
//     const storedProgress = localStorage.getItem('progress');
//     if (storedProgress) {
//       setCurrentProgress(parseInt(storedProgress));
//     }
//   }, []); // This effect runs only once when component mounts




//   const handleOverviewButtonClick = () => {
//     // if (currentProgress > 1) {
//     //   return;
//     // }

//     setTimeout(() => {
    
//       setCurrentProgress(currentProgress+1);
//       localStorage.setItem('progress', currentProgress+1);
//     }, 5000);
//   };

//   // const handleDomainButtonClick = () => {
//   //   // Wait for 5 seconds (5000 milliseconds) before updating the progress
//   //   if (currentProgress >= 2) {
//   //     return;
//   //   }
//   //   setTimeout(() => {
    
//   //     setCurrentProgress(2);
//   //     localStorage.setItem('progress', 2);
//   //   }, 5000);
//   // };

//   // const handleMandatoryButtonClick = () => {
//   //   if (currentProgress >= 3) {
//   //     return;
//   //   }
//   //   setTimeout(() => {
    
//   //     setCurrentProgress(3);
//   //     localStorage.setItem('progress', 3);
//   //   }, 5000);
//   // };
  
//   // const handleDeepButtonClick = () => {
//   //   // Wait for 5 seconds (5000 milliseconds) before updating the progress
//   //   if (currentProgress >= 4) {
//   //     return;
//   //   }
//   //   setTimeout(() => {
    
//   //     setCurrentProgress(4);
//   //     localStorage.setItem('progress', 4);
//   //   }, 5000);
//   // };

//   // const handleQuizButtonClick = () => {
//   //   // Wait for 5 seconds (5000 milliseconds) before updating the progress
//   //   if (currentProgress >= 5) {
//   //     return;
//   //   }
//   //   setTimeout(() => {
    
//   //     setCurrentProgress(5);
//   //     localStorage.setItem('progress', 5);
//   //   }, 5000);
//   // };
   
//   const handleRefreshButtonClick = () => {
   
//       setCurrentProgress(0);
//       localStorage.setItem('progress', 0);
    
//   };
 
 
 
 
//   const totalItems = 5; // Example: Total number of items
//   return (
//     <div className="app-side-nav ">
//       <nav className="side-nav-content">
//         <ul className="nav-list">
//           {/* <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-home  px-2"></i>
//             ACFC Overview
//           </button>
 
//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/project" className="dropdown-item">
//                 DL 2.0 Migration Project
//               </a>
//               <a href="/dashboard/onboardingAccess" className="dropdown-item">
//               Onboarding Access-Citrix
//               </a>
 
//               <a href="/dashboard/hedis" className="dropdown-item">
//                 HEDIS
//               </a>
 
//               <a href="/dashboard/introduction" className="dropdown-item">
//                 Amerihealth Intro PPTX
//               </a>
//             </li>
//           </ul>
 
//           <br></br>
//           <br></br>
//           <br></br> */}
//           <li className="nav-list-item">
             
//              <span>
//                 <Link to="/dashboard"><span style={{ color: 'black' }}>Progress</span></Link>
//              </span>
//              {/* Add ProgressBar component here */}
//              {/* Pass currentProgress and totalItems to ProgressBar */}
//                <ProgressBar currentProgress={currentProgress}  totalItems={totalItems} />
               
//            </li>
  
//            <br></br>
 
//           <li className="nav-list-item">
//             <i class="fa-solid fa-home  "></i>
                                             
 
//             <span>
//               <Link to="/dashboard/project" onClick={handleOverviewButtonClick}>ACFC Overview</Link>
              
//             </span>
//           </li>
 
//           <br></br>
//           <br></br>
 
//           <li className="nav-list-item">
//             <i class="fa-solid fa-chair"></i>
 
//             <span>
//               <Link to="/dashboard/domainnew" onClick={handleOverviewButtonClick}>Domain Foundation</Link>
//             </span>
//           </li>
 
//           <br></br>
//           <br></br>
 
//           <li className="nav-list-item">
//             <i class="fa-solid fa-file-circle-plus "></i>
 
//             <span>
//               <Link to="/dashboard/edoprod"  onClick={handleOverviewButtonClick}>Mandatory Trainings</Link>
//             </span>
//           </li>
 
//           <br></br>
//           <br></br>
 
//           {/* <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-file-circle-plus px-2"></i>
//             Project And Track
//           </button>
 
//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/edoprod" className="dropdown-item">
//                 EDO-Prod Support
//               </a>
 
//               <a href="/dashboard/edo_pod_engg" className="dropdown-item">
//                 EDO-POD Engg
//               </a>
 
//               <a href="/dashboard/digital" className="dropdown-item">
//                 Digital
//               </a>
 
//               <a href="/dashboard/milliman" className="dropdown-item">
//                 Milliman
//               </a>
//             </li>
//           </ul>
 
//           <br></br>
//           <br></br> */}
 
         
// {/* <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
 
//             <span>
//               <Link to="/dashboard/mavericksTrain">Mavericks Training</Link>
//             </span>
//           </li>
 
//           <br></br>
//           <br></br>
//   */}
         
 
//           {/* <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
 
//             <span>
//               <Link to="/dashboard/mandatoryTrain">Mandatory Trainings</Link>
//             </span>
//           </li>
 
//           <br></br>
//           <br></br> */}
//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
 
//             <span>
//               <Link to="/dashboard/deep"onClick={handleOverviewButtonClick} >Deep Dive Session</Link>
//             </span>
//           </li>
//           <br></br>
//           <br></br>


//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
 
//             <span>
//               <Link to="" onClick={handleOverviewButtonClick}>Quiz</Link>
//             </span>
//           </li>


//           <li className="nav-list-item">
            
 
//             <span>
//               <Link to="" onClick={handleRefreshButtonClick}>Refresh</Link>
//             </span>
//           </li>
 
 
 
         
         
 
//           {/* <li className="nav-list-item">
//             <i class="fa-solid fa-users"></i>
 
//             <span>
//               <Link to="/dashboard/onboarding">Onboarding</Link>
//             </span>
//           </li>
 
//           <br></br>
//           <br></br> */}
 
         
 
//           <br></br>
//           <br></br>
 
         
//         </ul>
//         <ul className="bottom-nav-list">
 
//   <li className="bottom-nav-list-item">
//     <a href="https://tensaigpt.hexaware.com/" target="_blank" rel="noopener noreferrer">
//       <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe" alt="Tensai GPT Icon" />
//       {/* for icon name  */}
//     </a>
//   </li>
// </ul>
 
 
//       </nav>
 
//       <Outlet />
//     </div>
//   );
// };
 
// export default SideNav;




// import { Outlet, Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
 
// import "./SideNav.css";
// import AnimatedExample from "../../pages/ProgressBar";
// import CustomProgressBar from "../../pages/ProgressBar";
// import ProgressBar from "../../pages/ProgressBar";
// import { progress } from "framer-motion";

// const SideNav = () => {
//   const [currentProgress, setCurrentProgress] = useState(0);
//   const [overviewClicked, setOverviewClicked] = useState(false);
//   const [domainClicked, setDomainClicked] = useState(false);
//   const [mandatoryClicked, setMandatoryClicked] = useState(false);
//   const [deepClicked, setDeepClicked] = useState(false);
//   const [quizClicked, setQuizClicked] = useState(false);

//   useEffect(() => {
//     const storedProgress = localStorage.getItem('progress');
//     if (storedProgress) {
//       setCurrentProgress(parseInt(storedProgress));
//     }
//   }, []);

//   // const handleButtonClick = (clickedState, setClickedState) => {
//   //   if (!clickedState) {
//   //     setTimeout(() => {
//   //       const nextProgress = currentProgress + 1;
//   //       setCurrentProgress(nextProgress);
//   //       localStorage.setItem('progress', nextProgress);
//   //       setClickedState(true);
//   //     }, 5000); // Wait for 5000 milliseconds (5 seconds) before updating the progress bar
//   //   }
//   // };
//   const handleButtonClick = (clickedState, setClickedState, delay) => {
    
//     if (!clickedState) {
//       setTimeout(() => {
//         const nextProgress = currentProgress + 1;
//         setCurrentProgress(nextProgress);
//         localStorage.setItem('progress', nextProgress);
//         setClickedState(true);
//       }, delay);
//     }
//   };

//   const handleRefreshButtonClick = () => {
//     setCurrentProgress(0);
//     localStorage.setItem('progress', 0);
//     setOverviewClicked(false);
//     setDomainClicked(false);
//     setMandatoryClicked(false);
//     setDeepClicked(false);
//     setQuizClicked(false);
//   };

//   return (
//     <div className="app-side-nav">
//       <nav className="side-nav-content">
//         <ul className="nav-list">
//           <li className="nav-list-item">
//             <span>
//               <Link to="/dashboard"><span style={{ color: 'black' }}>Progress</span></Link>
//             </span>
//             <ProgressBar currentProgress={currentProgress} totalItems={5} />
//           </li>
//           <li className="nav-list-item">
//             <i class="fa-solid fa-home  "></i>
//             <span>
//               <Link to="/dashboard/project" onClick={() => handleButtonClick(overviewClicked, setOverviewClicked,5000)}>ACFC Overview</Link>
//             </span>
//           </li>
//           <br></br>
//           <br></br>
//           <li className="nav-list-item">
//             <i class="fa-solid fa-chair"></i>
//             <span>
//               <Link to="/dashboard/domainnew" onClick={() => handleButtonClick(domainClicked, setDomainClicked,3000)}>Domain Foundation</Link>
//             </span>
//           </li>
//           <br></br>
//           <br></br>
//           <li className="nav-list-item">
//             <i class="fa-solid fa-file-circle-plus "></i>
//             <span>
//               <Link to="/dashboard/edoprod" onClick={() => handleButtonClick(mandatoryClicked, setMandatoryClicked,10000)}>Mandatory Trainings</Link>
//             </span>
//           </li>
//           <br></br>
//           <br></br>
//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
//             <span>
//               <Link to="/dashboard/deep" onClick={() => handleButtonClick(deepClicked, setDeepClicked,2000)}  >Deep Dive Session</Link>
//             </span>
//           </li>
//           <br></br>
//           <br></br>
//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>
//             <span>
//               <Link to="" onClick={() => handleButtonClick(quizClicked, setQuizClicked,4000)}>Quiz</Link>
//             </span>
//           </li>
//           <br></br>
          
//           <li className="nav-list-item">
//             <span>
//               <Link to="" onClick={handleRefreshButtonClick}>Refresh</Link>
//             </span>
//           </li>
//         </ul>
//         <ul className="bottom-nav-list">
//           <li className="bottom-nav-list-item">
//             <a href="https://tensaigpt.hexaware.com/" target="_blank" rel="noopener noreferrer">
//               <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe" alt="Tensai GPT Icon" />
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default SideNav;



// import { Outlet, Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import "./SideNav.css";
// import ProgressBar from "../../pages/ProgressBar";

// const SideNav = () => {
//   const [currentProgress, setCurrentProgress] = useState(0);
//   const [buttonStates, setButtonStates] = useState({
//     overviewClicked: false,
//     domainClicked: false,
//     mandatoryClicked: false,
//     deepClicked: false,
//     quizClicked: false,
//   });

//   useEffect(() => {
//     const storedProgress = localStorage.getItem('progress');
//     if (storedProgress) {
//       setCurrentProgress(parseInt(storedProgress));
//     }
//   }, []);

//    const handleButtonClick = (buttonName, delay) => {
//     const storedProgress = localStorage.getItem(buttonName);
    
//     if (!buttonStates[buttonName] && !storedProgress) {
//       setTimeout(() => {
//         const nextProgress = currentProgress + 1;
//         setCurrentProgress(nextProgress);
//         localStorage.setItem('progress', nextProgress);
//         localStorage.setItem(buttonName, true);
//         setButtonStates(prevState => ({ ...prevState, [buttonName]: true }));
//       }, delay);
//     }
//   };

//   const handleRefreshButtonClick = () => {
//     setCurrentProgress(0);
//     localStorage.setItem('progress', 0);
//     Object.keys(buttonStates).forEach(key => {
//       localStorage.removeItem(key);
//     });
//     setButtonStates({
//       overviewClicked: false,
//       domainClicked: false,
//       mandatoryClicked: false,
//       deepClicked: false,
//       quizClicked: false,
//     });
//   };

//   return (
//     <div className="app-side-nav">
//       <nav className="side-nav-content">
//         <ul className="nav-list">
//           <li className="nav-list-item">
//             <span>
//               <Link to="/dashboard">
//                 <span style={{ color: "black" }}>Progress</span>
//               </Link>
//             </span>
//             <ProgressBar currentProgress={currentProgress} totalItems={5} />
//           </li>
//           <li className="nav-list-item">
//             <i className="fa-solid fa-home  "></i>
//             <span>
//               <Link
//                 to="/dashboard/project"
//                 onClick={() => handleButtonClick("overviewClicked", 5000)}
//               >
//                 ACFC Overview
//               </Link>
//             </span>
//           </li>
//           <br />
//           <br />
//           <li className="nav-list-item">
//             <i className="fa-solid fa-chair"></i>
//             <span>
//               <Link
//                 to="/dashboard/domainnew"
//                 onClick={() => handleButtonClick("domainClicked", 7000)}
//               >
//                 Domain Foundation
//               </Link>
//             </span>
//           </li>
//           <br />
//           <br />
//           <li className="nav-list-item">
//             <i className="fa-solid fa-file-circle-plus "></i>
//             <span>
//               <Link
//                 to="/dashboard/edoprod"
//                 onClick={() => handleButtonClick("mandatoryClicked", 9000)}
//               >
//                 Mandatory Trainings
//               </Link>
//             </span>
//           </li>
//           <br />
//           <br />
//           <li className="nav-list-item">
//             <i className="fa-solid fa-train"></i>
//             <span>
//               <Link
//                 to="/dashboard/deep"
//                 onClick={() => handleButtonClick("deepClicked", 5000)}
//               >
//                 Deep Dive Session
//               </Link>
//             </span>
//           </li>
//           <br />
//           <br />
//           <li className="nav-list-item">
//             <i className="fa-solid fa-train"></i>
//             <span>
//               <Link
//                 to=""
//                 onClick={() => handleButtonClick("quizClicked", 4000)}
//               >
//                 Quiz
//               </Link>
//             </span>
//           </li>
//           <br />
//           <li className="nav-list-item">
//             <span>
//               <Link to="" onClick={handleRefreshButtonClick}>
//                 Refresh
//               </Link>
//             </span>
//           </li>
//         </ul>
//         <ul className="bottom-nav-list">
//           <li className="bottom-nav-list-item">
//             <a
//               href="https://tensaigpt.hexaware.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe"
//                 alt="Tensai GPT Icon"
//               />
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default SideNav;





import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SideNav.css";
import ProgressBar from "../../pages/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [buttonStates, setButtonStates] = useState({
    overviewClicked: false,
    domainClicked: false,
    mandatoryClicked: false,
    deepClicked: false,
    quizClicked: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const storedProgress = localStorage.getItem('progress');
    if (storedProgress) {
      setCurrentProgress(parseInt(storedProgress));
    }
  }, []);

  const handleButtonClick = (buttonName, delay) => {
    const storedProgress = localStorage.getItem(buttonName);

    if (!buttonStates[buttonName] && !storedProgress && !isProcessing) {
      setIsProcessing(true);
      setTimeout(() => {
        const nextProgress = currentProgress + 1;
        setCurrentProgress(nextProgress);
        localStorage.setItem('progress', nextProgress);
        localStorage.setItem(buttonName, true);
        setButtonStates(prevState => ({ ...prevState, [buttonName]: true }));
        setIsProcessing(false);
      }, delay);
    }
  };

  const handleRefreshButtonClick = () => {
    setCurrentProgress(0);
    localStorage.setItem('progress', 0);
    Object.keys(buttonStates).forEach(key => {
      localStorage.removeItem(key);
    });
    setButtonStates({
      overviewClicked: false,
      domainClicked: false,
      mandatoryClicked: false,
      deepClicked: false,
      quizClicked: false,
    });
  };

  return (
    <div className="app-side-nav">
      <nav className="side-nav-content">
        <ul className="nav-list">
          <li className="nav-list-item">
            <span>
              <Link to="/dashboard">
                {/* <span style={{ color: "black" }}>Progress</span> */}
              </Link>
            </span>
            {/* <ProgressBar currentProgress={currentProgress} totalItems={5} /> */}
          </li>
          <li className="nav-list-item">
            <i className="fa-solid fa-key"></i>
            <span>
              <Link
                to="https://hexawareonline.sharepoint.com/:b:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/Onboarding/Onboarding_Access-Citrix/AmeriHealth%20Onboarding%20Login%20Instruction%20(Contractor).pdf?csf=1&web=1&e=X7nOTj"
                onClick={() => handleButtonClick("overviewClicked", 5000)}
              >
                ACFC Login Instruction
              </Link>
            </span>
          </li>
          <br />
          <br />


          <li className="nav-list-item">
            <i className="fa-solid fa-home"></i>
            <span>
              <Link
                to="/dashboard/project"
                onClick={() => handleButtonClick("overviewClicked", 5000)}
              >
                ACFC Overview
              </Link>
            </span>
          </li>
          <br />
          <br />
          <li className="nav-list-item">
            <i className="fa-solid fa-chair"></i>
            <span>
              <Link
                to="/dashboard/domainnew"
                onClick={() => handleButtonClick("domainClicked", 7000)}
              >
                Domain Foundation
              </Link>
            </span>
          </li>
          <br />
          <br />
          <li className="nav-list-item">
          <i className="fa-solid fa-train"></i>
            <span>
              <Link
                to="/dashboard/edoprod"
                onClick={() => handleButtonClick("mandatoryClicked", 9000)}
              >
                Mandatory Trainings
              </Link>
            </span>
          </li>
          <br />
          <br />
          <li className="nav-list-item">
            
            {/* <i className="fa-solid fa-file-circle-plus"></i> */}
            <i><FontAwesomeIcon icon={faWater} /></i>
            
            <span>
              <Link
                to="/dashboard/deep"
                onClick={() => handleButtonClick("deepClicked", 5000)}
              >
                Deep Dive Session
              </Link>
            </span>
          </li>
          <br />
          <br />
          {/* <li className="nav-list-item">
          <i class="fa-solid fa-question"></i>
            <span>
              <Link
                to=""
                onClick={() => handleButtonClick("quizClicked", 4000)}
              >
                Quiz
              </Link>
            </span>
          </li> */}
          <br />
          {/* <li className="nav-list-item">
            <span>
              <Link to="" onClick={handleRefreshButtonClick}>
                Refresh
              </Link>
            </span>
          </li> */}
        </ul>
        <ul className="bottom-nav-list">
          <li className="bottom-nav-list-item">
            <a
              href="https://tensaigpt.hexaware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe"
                alt="Tensai GPT Icon"
              />
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default SideNav;
