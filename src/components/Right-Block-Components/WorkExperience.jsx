import styleWork from "./rightcss/WorkExperience.module.css";
import styleRight from "../css/RightBlock.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { forwardRef, useRef, useImperativeHandle } from "react";

const WorkExperience = forwardRef((props, ref) => {
  const exp = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      exp.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <div className={styleWork.experience} ref={exp}>
      <div class={styleRight.sectionTitle}>
        <h2>Work Experience</h2>
        <hr />
      </div>
      <div className={styleWork.experienceItem}>
        <h5>
          <ins>Administrative Assistant</ins>
        </h5>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-7">
              <h6>Maxco-NRI Innovative Property Management</h6>
              <p>
                Dec 2023 - Jan 2025 · 1 yr 2 mos <br />
                Silvermax Building, Edavelikkal, Mattannur, Kannur, Kerala,
                India · Remote
              </p>
            </div>
            <div
              className={`${
                styleWork.maxcoImg
              } ${"col-md-6"} ${"align-items-center"}`}
            >
              <img
                src="https://maxco.co.in/wp-content/uploads/2022/09/logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <p>
              Develop and execute comprehensive marketing strategies and
              campaigns that align with the company's goals and objectives.
              Lead, mentor, and manage a high-performing marketing. Monitor
              brand consistency across marketing channels and materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WorkExperience;
