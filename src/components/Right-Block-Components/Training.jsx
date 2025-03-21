import { forwardRef, useRef, useImperativeHandle } from "react";
import styleRight from "../css/RightBlock.module.css";

const Training = forwardRef((props, ref) => {
  const train = useRef(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      train.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="Training" ref={train}>
      <div className={styleRight.sectionTitle}>
        <h2 className="roboto-mainhead">Training</h2>
        <hr />
      </div>
      <div className="training-item">
        <h5>
          <ins>TAP Academy , Banglore India .</ins>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="tap-img">
            <img
              src="https://thetapacademy.com/_next/static/media/company-logo.1ee5784c.svg"
              alt="tap academy"
            />
          </span>
        </h5>
        <h6 className="quicksand-para">Full Stack Web Development</h6>
        <span>
          Skilled full-stack web developer with expertise in building dynamic
          and responsive web applications using front-end technologies such as
          HTML, CSS, Javascript and Bootstrap ,and Back-end technologies Java ,
          Spring , Hibernate . Proficient in designing and implementing robust
          back-end solutions , while creating seamless and interactive front-end
          experiences.
        </span>
      </div>
      <hr />
      <div className="training-item">
        <h5>
          <ins>KWICKLAB Infotech , Kakkanad , Kerala</ins>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <img
              src="https://www.kwicklab.com/wp-content/uploads/2022/12/kwicklogo.png"
              alt="kwick lab"
            />
          </span>
        </h5>
        <h6 className="quicksand-para">Android Application Development</h6>
        <span>
          Passionate and detail-oriented Android app developer with extensive
          experience in building robust, high-performance mobile applications
          using Java. Proficient in Android Studio, Java, and integrating APIs,
          while focusing on delivering smooth user interface.
        </span>
      </div>
    </div>
  );
});

export default Training;
