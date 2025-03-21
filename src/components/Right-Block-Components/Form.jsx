import { forwardRef, useRef, useImperativeHandle } from "react";
import styleForm from "./rightcss/Form.module.css";
import styleRight from "../css/RightBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Form = forwardRef((props, ref) => {
  const form = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      form.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="form" ref={form}>
      <div className={styleRight.sectionTitle}>
        <h2>Contact</h2>
        <hr />
      </div>
      <table className={`${styleForm.contactTable}`}>
        <tr>
          <td>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </td>
          <td>vishnuponoli21gmail.com</td>
        </tr>
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
          </td>
          <td>Nalshathra , Anjarakandy , Kannur ,Kerala</td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={faPhone} size="lg" />
          </td>
          <td>+91 9995747707</td>
        </tr>
      </table>
      <hr />
      <form action="">
        <div className="container">
          <div className={`${"row"} ${styleForm.cRow}`}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
          </div>
          <div className={`${"row "} ${styleForm.cRow}`}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className={`${"row "} ${styleForm.cRow}`}>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Leave a Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <button type="button" className={`${"btn"} ${styleForm.cButton}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default Form;
