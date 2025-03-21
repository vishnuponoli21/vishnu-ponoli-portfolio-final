import styleSkill from "./rightcss/SkillSet.module.css";
import styleRight from "../css/RightBlock.module.css";
import { forwardRef, useRef, useImperativeHandle } from "react";
import "bootstrap/dist/css/bootstrap.css";

const SkillSet = forwardRef((props, ref) => {
  const skill = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      skill.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className={`${"skillset"}`}>
      <div className={`${"container-fluid"}`}>
        <div className={`${"row"}`}>
          <div className="col-12">
            <div className={styleRight.sectionTitle}>
              <h2>SkillSet</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>Java</label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.java} ${"progress-bar"}`}>45%</div>
          </div>
        </div>
        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>
            HTML , CSS , Bootstrap
          </label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.html} ${"progress-bar"}`}>85%</div>
          </div>
        </div>
        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>Figma</label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.figma} ${"progress-bar"}`}>40%</div>
          </div>
        </div>
        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>Javascript</label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.javascript} ${"progress-bar"}`}>
              75%
            </div>
          </div>
        </div>

        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>React.js</label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.react} ${"progress-bar"}`}>65%</div>
          </div>
        </div>
        <div className={`${styleSkill.cRow}`}>
          <label className={styleSkill.progrssTitle}>Mysql</label>
          <div
            className={`${"progress"} ${styleSkill.progress}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className={`${styleSkill.mysql} ${"progress-bar"}`}>55%</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SkillSet;
