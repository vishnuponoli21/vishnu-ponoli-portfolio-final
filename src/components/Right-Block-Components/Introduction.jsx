import styleIntro from "./rightcss/Introduction.module.css";
import styleRight from "../css/RightBlock.module.css";
import "bootstrap/dist/css/bootstrap.css";
import pdf from "../pdf/VISHNU PONOLI CV (1).pdf";
export function Introduction() {
  return (
    <div className={styleIntro.Intro}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styleRight.sectionTitle}>
              <h2>HI , Im Vishnu Ponoli</h2>
            </div>
          </div>
          <div className="col-md-12">
            <p>
              Full stack web developer A highly motivated and dedicated Computer
              Engineer graduate with a passion for full stack development
              seeking an entry-level position in a reputable engineering firm
              where I can apply my academic knowledge, gain practical
              experience, and contribute to the success of the organization .
            </p>
            <p>
              Eager to apply problem-solving skills and technical expertise to
              contribute to a collaborative team environment and grow within a
              software engineering role.
            </p>
          </div>
        </div>
      </div>
      <div className={styleIntro.viewResumeDiv}>
        <a className={styleIntro.viewResume} href={pdf} target="_blank">
          View Resume
        </a>
      </div>
    </div>
  );
}
