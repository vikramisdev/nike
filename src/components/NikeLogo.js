import * as React from "react";
const NikeLogo = (props) => (
  <img className={props.className} onClick={() => props.onClick} src="nike_logo.svg" alt="logo" height={80} width={80}></img>
);
export default NikeLogo;
