import React, { useRef, useState } from "react";
import styleRight from "./css/RightBlock.module.css";
import "bootstrap/dist/css/bootstrap.css";

import { Introduction } from "./Right-Block-Components/Introduction";
import Expertise from "./Right-Block-Components/Expertise";
import WorkExperience from "./Right-Block-Components/WorkExperience";
import SkillSet from "./Right-Block-Components/SkillSet";
import Training from "./Right-Block-Components/Training";
import Form from "./Right-Block-Components/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBars,
  faCrosshairs,
  faFlaskVial,
  faPhone,
  faScrewdriverWrench,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Education from "./Right-Block-Components/Education";

const RightBlock = () => {
  let container = useRef();
  const [count, setCount] = useState(2);
  const [num, setNum] = useState(0);

  useGSAP(
    () => {
      gsap.to(".li", { x: 0 + num, duration: 0.5, delay: 0.1, stagger: 0.1 });
    },
    { scope: container, dependencies: [num] }
  );

  //all scroll on nav
  const expert = useRef(null);
  const expertScrollClick = () => {
    expert.current?.scrollIntoView();
  };
  const exp = useRef(null);
  const expScrollClick = () => {
    exp.current?.scrollIntoView();
  };
  const skill = useRef(null);
  const skillScrollClick = () => {
    skill.current?.scrollIntoView();
  };
  const train = useRef(null);
  const trainScrollClick = () => {
    train.current?.scrollIntoView();
  };
  const educ = useRef(null);
  const educScrollClick = () => {
    educ.current?.scrollIntoView();
  };
  const form = useRef(null);
  const formScrollClick = () => {
    form.current?.scrollIntoView();
  };

  return (
    <>
      <div className={styleRight.navlist}>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count % 2 == 0) setNum(-290);
            else setNum(290);
          }}
          className={styleRight.nbars}
        >
          <span>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </span>
        </button>
        <ul ref={container}>
          <li
            className="li"
            onClick={() => {
              expertScrollClick(), setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faCrosshairs} size="lg" />
              </span>
              <span>Expertise</span>
            </button>
          </li>
          <li
            className="li"
            onClick={() => {
              expScrollClick();
              setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faUserGear} size="lg" />
              </span>
              <span>Experience</span>
            </button>
          </li>
          <li
            className="li"
            onClick={() => {
              skillScrollClick();
              setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />
              </span>
              <span>Skillset</span>
            </button>
          </li>
          <li
            className="li"
            onClick={() => {
              trainScrollClick();
              setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faFlaskVial} size="" />
              </span>
              <span>Training</span>
            </button>
          </li>
          <li
            className="li"
            onClick={() => {
              educScrollClick();
              setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faAward} size="lg" />
              </span>

              <span>Education</span>
            </button>
          </li>
          <li
            className="li"
            onClick={() => {
              formScrollClick();
              setNum(430);
              setCount(2);
            }}
          >
            <button>
              <span>
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </span>
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>

      <div className={styleRight.rightBlock}>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.oddSection}`}
        >
          <Introduction />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.evenSection}`}
          ref={expert}
        >
          <Expertise />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.oddSection}`}
          ref={exp}
        >
          <WorkExperience />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.evenSection}`}
          ref={skill}
        >
          <SkillSet />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.oddSection}`}
          ref={train}
        >
          <Training />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.evenSection}`}
          ref={educ}
        >
          <Education />
        </section>
        <section
          className={`${styleRight.sectionWrapper} ${styleRight.oddSection}`}
          ref={form}
        >
          <Form />
        </section>
        <footer>
          <p>
            <i>@2024 vishnu ponoli</i>
          </p>
        </footer>
      </div>
    </>
  );
};

export default RightBlock;
