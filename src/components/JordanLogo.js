import * as React from "react";
const JordanLogo = (props) => (
  <img className={props.className} onClick={() => props.onClick} src="jordan_logo.svg" alt="logo" height={27} width={27}></img>
);
export default JordanLogo;
