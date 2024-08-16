// import React, { useEffect, useState } from "react";

// function Greeting() {
//   const [greeting, setGreeting] = useState("");

//   useEffect(() => {
//     const currentTime = new Date().getHours();
//     let newGreeting;

//     if (currentTime < 12) {
//       newGreeting = "Good Morning...`!";
//     } else if (currentTime < 18) {
//       newGreeting = "Good Afternoon...`!";
//     } else {
//       newGreeting = "Good Evening...`!";
//     }

//     setGreeting(newGreeting);
//   }, []);

//   return <h>{greeting}</h>;
// }

// export default Greeting;


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const currentTime = new Date().getHours();
    let newGreeting;
    let newIcon;

    if (currentTime < 12) {
      newGreeting = "Good Morning...`!";
      newIcon = faCloudSun;
    } else if (currentTime < 18) {
      newGreeting = "Good Afternoon...`!";
      newIcon = faSun;
    } else {
      newGreeting = "Good Evening...`!";
      newIcon = faMoon;
    }

    setGreeting(newGreeting);
    setIcon(newIcon);
  }, []);

  return (
    <h>
      <FontAwesomeIcon icon={icon} /> {greeting}
    </h>
  );
}

export default Greeting;

