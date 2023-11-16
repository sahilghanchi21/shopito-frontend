import React from "react";
import ReactDom from "react-dom";
import styles from "./Loader.module.scss";
import loaderImage from "../../assets/loader.gif";
const Loader = () => {
  return ReactDom.createPortal(
    <div className={styles.wrapper}>
      <div>
        <img src={loaderImage} alt="Loading" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={loaderImage} alt="Loading" width={40}/>
    </div>
  );
};

export default Loader;
