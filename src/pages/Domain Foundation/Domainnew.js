import React from "react";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import "./Domainnew.css";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.8 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function Domainnew() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const scope2 = useMenuAnimation(isOpen2);

  return (
    <div>
    
    <nav className="menu" ref={scope}>
      <div
        style={{
          position: "fixed",
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: "white",
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Hexaware Standard Sessions
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
  
      


         <li><a href="https://hexaware.sumtotal.host/core/pillarRedirect?relyingParty=LM&url=app%2Fmanagement%2FLMS_ActDetails.aspx%3FActivityId%3D58630%26UserMode%3D0" style={{ color: "White"}}>HLS Overview</a></li>
         <li><a href="https://hexaware.sumtotal.host/Core/pillarRedirect?relyingParty=LM&url=core%2Factivitydetails%2FViewActivityDetails%3FActivityId%3D23838%26UserMode%3D0" style={{ color: "White"}}>Health data 101 </a></li>
         <li><a href=" https://hexaware.sumtotal.host/core/pillarRedirect?relyingParty=LM&url=app%2Fmanagement%2FLMS_ActDetails.aspx%3FActivityId%3D58720%26UserMode%3D0" style={{ color: "White"}}>Payer 101</a></li>
         <li><a href="https://hexaware.udemy.com/course/hipaa-workforce-certificate-for-professionals-hwcp/#overview" style={{ color: "White"}}>HIPAA Workforce Basics</a></li>
         <li><a href="https://hexaware.sumtotal.host/rcore/c/pillarRedirect?isDeepLink=1&relyingParty=LM&url=https%3A%2F%2Fhexaware.sumtotal.host%2Flearning%2Fcore%2Factivitydetails%2FViewActivityDetails%3FUserMode%3D0%26ActivityId%3D110844%26ClassUnderStruct%3DFalse%26CallerUrl%3D%2Flearning%2Flearner%2FHome%2FGoToPortal%3Fkey%3D0%26SearchCallerURL%3Dhttps%253A%252F%252Fhexaware.sumtotal.host%252Fcore%252FsearchRedirect%253FViewType%253DList%2526SearchText%253DIT%25252520security%25252520and%25252520data%25252520priv%2526startRow%253D0%26SearchCallerID%3D2" style={{ color: "White"}}>IT Security and Data Privacy</a></li>
         <li><a href="https://hexaware.udemy.com/course/fundamentals-of-insurance/?learning_path_id=1631588" style={{ color: "White"}}>Fundamentals Of Insurance 1</a></li>
         <li><a href="https://hexaware.udemy.com/course/fundamentals-of-insurance-2/?learning_path_id=1631588#overview" style={{ color: "White"}}>Fundamentals Of Insurance 1</a></li>

      </ul>{" "}
    </nav>
    <nav className="menu1" ref={scope2}>
    <div
      style={{
        position: "fixed",
        bottom: -210,
        left: 200,
        width: 100,
        height: 100,
        background: "white",
      }}
    />
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsOpen2(!isOpen2)}
    >
      ACFC Specific Training Sessions
      <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
        <svg width="15" height="15" viewBox="0 0 20 20">
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </div>
    </motion.button>
    <ul
      style={{
        pointerEvents: isOpen2 ? "auto" : "none",
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
    >
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/2%20Medicaid%20101.pptx?d=wd0fa339ce05442cd89d94ebf22d00f1a&csf=1&web=1&e=awfPvd" style={{ color: "White"}}>Medicaid 101</a></li>
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/3%20HIE%20101.pptx?d=w0bcf2f89479a4ed1aedfc8c861d1e441&csf=1&web=1&e=inG9Jl" style={{ color: "White"}}>HIE 101 </a></li>
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/4%20CCD%20101.pptx?d=wb9ee7aa76b2a4a21ba0f7c6fcc954bc5&csf=1&web=1&e=mmBJcL" style={{ color: "White"}}>CCD 101</a></li>
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/5%20PBM%20101.pptx?d=w5012c9b3dfc04a71b5bf536d108e8389&csf=1&web=1&e=mTQdS6" style={{ color: "White"}}>PBM 101</a></li>
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/6%20FHIR%20101.pptx?d=w99b9313d17254d14809df5dbd52a86e1&csf=1&web=1&e=qjVpHB" style={{ color: "White"}}>FHIR 101</a></li>
        <li><a href="https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/02%20Domain%20Foundations/2%20ACFC%20Specific%20Training%20Sessions/7%20Healthcare%20Payer%20Data%20%26%20Analytics%20101.pptx?d=we95210c0b6f4486381b4840511ffda10&csf=1&web=1&e=osaEXD" style={{ color: "White"}}>Healthcare Payer Data & Analytics 101</a></li>

    </ul>{" "}
  </nav>
  </div>
   
  );
}

