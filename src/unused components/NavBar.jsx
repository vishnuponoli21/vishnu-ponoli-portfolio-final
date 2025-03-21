// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAward,
//   faBars,
//   faCrosshairs,
//   faFlaskVial,
//   faPhone,
//   faScrewdriverWrench,
//   faUserGear,
// } from "@fortawesome/free-solid-svg-icons";
// import nav from "./rightcss/NavBar.module.css";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import React, { useRef, useState } from "react";

// function NavBar() {
//   let container = useRef();
//   const [count, setCount] = useState(2);
//   const [num, setNum] = useState(1);

//   useGSAP(
//     () => {
//       gsap.to(".li", { x: 0 + num, duration: 0.5, delay: 0.1, stagger: 0.1 });
//     },
//     { scope: container, dependencies: [num] }
//   );

//   return (
//     <div className={nav.navlist}>
//       <a
//         onClick={() => {
//           setCount(count + 1);
//           if (count % 2 == 0) setNum(-430);
//           else setNum(430);
//         }}
//         className={nav.nbars}
//       >
//         <FontAwesomeIcon icon={faBars} size="xl" />
//       </a>
//       <ul ref={container}>
//         <li className="li shadow">
//           <a>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   {" "}
//                   <FontAwesomeIcon icon={faCrosshairs} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   {" "}
//                   <span>Expertise</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//         <li className="li shadow">
//           <a>
//             <div className="container">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   <FontAwesomeIcon icon={faUserGear} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   <span>Experience</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//         <li className="li shadow">
//           <a href="">
//             <div className="container">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   <span>Skillset</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//         <li className="li shadow">
//           <a href="">
//             <div className="container">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   <FontAwesomeIcon icon={faFlaskVial} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   <span>Training</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//         <li className="li shadow">
//           <a href="">
//             <div className="container">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   {" "}
//                   <FontAwesomeIcon icon={faAward} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   {" "}
//                   <span>Education</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//         <li className="li shadow">
//           <a href="">
//             <div className="container">
//               <div className="row">
//                 <div className="col-6 text-center">
//                   <FontAwesomeIcon icon={faPhone} size="lg" />
//                 </div>
//                 <div className="col-6 text-center">
//                   <span>Contact</span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default NavBar;
