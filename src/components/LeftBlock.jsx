import React, { useRef } from "react";
import styleLeft from "./css/LeftBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const mail = "mailto:vishnuponoli21@gmail.com";
const whatsapp = "https://wa.me/qr/L7CH3GKGGOEMD1";
const github = "https://github.com/vishnuponoli21";
const linkdin =
  "https://www.linkedin.com/in/vishnu-ponoli-19358230a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJJDTQp4dSPKFpy3B1fNvXg%3D%3D";

const shadow = "shadow mb-4 ";

// Side Icons and its animation
function SideIcon() {
  let i1 = useRef();
  let i2 = useRef();
  let i3 = useRef();
  let i4 = useRef();
  useGSAP(() => {
    gsap.from([i4.current, i3.current, i2.current, i1.current], {
      y: -1000,
      duration: 1.3,
      delay: 3,
      stagger: 0.2,
      opacity: 0,
      rotate: 170,
    });
  });

  return (
    <div className={styleLeft.side}>
      <ul>
        <li ref={i1} className={shadow}>
          <a href={mail} target="blank">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
        <li ref={i2} className={shadow}>
          <a href={whatsapp} target="blank">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </li>
        <li ref={i3} className={shadow}>
          <a href={github} target="blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li ref={i4} className={shadow}>
          <a href={linkdin} target="blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

// Left Block
function LeftBlock() {
  let p1 = useRef();
  let p2 = useRef();

  useGSAP(() => {
    gsap.from([p1.current, p2.current], {
      y: 100,
      duration: 1,
      delay: 4,
      stagger: 0.2,
      opacity: 0,
    });
  });

  return (
    <>
      <div className={styleLeft.leftBlock}>
        <header>
          <div className={styleLeft.content}>
            <h1 ref={p1} className={styleLeft.robotoGfont2}>
              VISHNU PONOLI
            </h1>
            <p ref={p2} className="lead">
              Software Engineer
            </p>
            <SideIcon />
          </div>
          <div className={styleLeft.profileImg}></div>
        </header>
      </div>
    </>
  );
}

export default LeftBlock;
