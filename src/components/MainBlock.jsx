import React from "react";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import FirstAnim from "./FirstAnim";
import styleMain from "./css/MainBlock.module.css";

function MainBlock() {
  return (
    <>
      <div className={`${styleMain.mainBlock}`}>
        <FirstAnim />
        <LeftBlock />
        <RightBlock />
      </div>
    </>
  );
}

export default MainBlock;
