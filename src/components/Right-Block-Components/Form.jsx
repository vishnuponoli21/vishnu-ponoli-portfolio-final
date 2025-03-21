import { forwardRef, useRef, useImperativeHandle } from "react";
import styleForm from "./rightcss/Form.module.css";
import styleRight from "../css/RightBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

//Form
function FormInput() {
  const username = useRef();
  const email = useRef();
  const msg = useRef();
  const store = collection(firestore, "messages");
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(msg.current.value);

    let data1 = {
      name: username.current.value,
      message: msg.current.value,
      email: email.current.value,
    };
    try {
      addDoc(store, data1);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSave}>
      <div className="container">
        <div className={`${"row"} ${styleForm.cRow}`}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Fullname"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={username}
            />
          </div>
        </div>
        <div className={`${"row "} ${styleForm.cRow}`}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              ref={email}
            />
          </div>
        </div>
        <div className={`${"row "} ${styleForm.cRow}`}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">
              Leave a Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={msg}
            ></textarea>
          </div>
        </div>

        <button type="submit" className={`${styleForm.cButton}`}>
          Submit
        </button>
      </div>
    </form>
  );
}

const Form = forwardRef((props, ref) => {
  const form = useRef(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      form.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  //Contact information
  return (
    <div className="form" ref={form}>
      <div className={styleRight.sectionTitle}>
        <h2>Contact</h2>
        <hr />
      </div>
      <table className={`${styleForm.contactTable}`}>
        <thead>
          <tr>
            <td>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </td>
            <td>vishnuponoli21gmail.com</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </td>
            <td>Nalshathra , Anjarakandy , Kannur ,Kerala</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </td>
            <td>+91 9995747707</td>
          </tr>
        </thead>
      </table>
      <hr />
      <FormInput />
    </div>
  );
});

export default Form;
