import styleAnim from "./css/FirstAnim.module.css";
import "bootstrap/dist/css/bootstrap.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function FirstAnim() {
  const full = useRef();
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();

  useGSAP(() => {
    gsap.to([dot1.current], {
      y: -12,
      yoyo: true,
      duration: 0.8,
      repeat: -1,
    });
    gsap.to([dot2.current], {
      y: -12,
      yoyo: true,
      duration: 0.8,
      delay: 0.2,
      repeat: -1,
    });
    gsap.to([dot3.current], {
      y: -12,
      yoyo: true,
      duration: 0.8,
      delay: 0.4,
      repeat: -1,
    });

    gsap.to(full.current, { y: 5000, duration: 18, delay: 3, opacity: 0 });
  });

  return (
    <div ref={full} className={styleAnim.cfull}>
      <div className={`${styleAnim.fContent}`}>
        <h1 className="lead display-5">VISHNU PONOLI</h1>
        <h5>Software Engineer</h5>
        <h2 id="portHead" className="display-1">
          <span className={styleAnim.codesymbol}>&lt;</span>
          PORTFOLIO
          <span className={styleAnim.codesymbol}>/&gt;</span>
        </h2>
        <div className={styleAnim.dots}>
          <h1 className="display-1">
            <div ref={dot1}>.</div>
            <div ref={dot2}>.</div>
            <div ref={dot3}>.</div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FirstAnim;
