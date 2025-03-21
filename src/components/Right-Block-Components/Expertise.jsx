import styleRight from "../css/RightBlock.module.css";
import styleExpert from "./rightcss/Expertise.module.css";
import React, { forwardRef, useRef, useImperativeHandle } from "react";

const Expertise = forwardRef((props, ref) => {
  const expert = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      expert.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div ref={expert}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styleRight.sectionTitle}>
              <h2>Expertise</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              className={`${
                styleExpert.expertiseItem
              } ${"text-start"} ${"shadow"} `}
            >
              <h5>Full Stack Development</h5>
              <p>
                Skilled and results-driven full-stack web developer with
                expertise in building dynamic and responsive applications using
                Java Spring, Hibernate, and front-end technologies such as HTML,
                CSS, and Bootstrap. Proficient in designing and implementing
                robust back-end solutions with Spring and Hibernate, while
                creating seamless and interactive front-end experiences.
                Experienced in working with both relational (MySQL) and
                (MongoDB) databases.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`${
                styleExpert.expertiseItem
              } ${"text-start"} ${"shadow"}`}
            >
              <h5>WIX Studio </h5>
              <p>
                Creative and detail-oriented web developer with expertise in Wix
                Studio, specializing in building responsive, user-friendly
                websites that deliver seamless user experiences. Proficient in
                leveraging Wix's advanced features, such as Velo by Wix, APIs,
                and custom code integrations to create dynamic and interactive
                websites. Skilled in design principles, SEO optimization, and
                performance enhancements.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div
                className={`${
                  styleExpert.expertiseItem
                } ${"text-start"} ${"shadow"}`}
              >
                <h5>Android App Development</h5>
                <p>
                  Passionate and detail-oriented Android app developer with
                  extensive experience in building robust, high-performance
                  mobile applications using Java. Proficient in Android Studio,
                  Java, and integrating APIs, while focusing on delivering
                  smooth user interfaces and seamless user experiences. Skilled
                  in developing apps with strong functionality, performance
                  optimization, and effective data management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Expertise;
