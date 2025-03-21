import { forwardRef, useRef, useImperativeHandle } from "react";
import styleRight from "../css/RightBlock.module.css";

const Education = forwardRef((props, ref) => {
  const educ = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      educ.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="education" ref={educ}>
      <div className={styleRight.sectionTitle}>
        <h2 className="roboto-mainhead">Education</h2>
        <hr />
      </div>
      <div className="education1">
        <div className="contaniner-fluid">
          <div className="row">
            <h4 className="roboto-condensed">
              Bachelor of Technology in Computer Science
            </h4>
          </div>
          <div className="row">
            <div className="col-md-9">
              <p className="quicksand-para">
                Sree Narayana Guru College Of Engineering And Technology,
                Payannur.
              </p>
            </div>
            <div className="col-md-3">
              <p>2018 -2022</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="education1">
        <div className="contaniner-fluid">
          <div className="row">
            <h4 className="roboto-condensed">Higher Secondary Education</h4>
          </div>
          <div className="row">
            <div className="col-md-9">
              <p className="quicksand-para">Kendriya Vidyalaya Kannur-CBSE</p>
            </div>
            <div className="col-md-3">
              <p>CGPA : 62.2%</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="education1">
        <div className="contaniner-fluid">
          <div className="row">
            <h4 className="roboto-condensed">Secondary Education</h4>
          </div>
          <div className="row">
            <div className="col-md-9">
              <p className="quicksand-para">Kendriya Vidyalaya Kannur-CBSE</p>
            </div>
            <div className="col-md-3">
              <p>CGPA : 7.4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Education;
