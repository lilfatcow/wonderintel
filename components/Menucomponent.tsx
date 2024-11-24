import type { NextPage } from "next";
import Image from "next/image";
import styles from "./component-3.module.css";

const Menucomponent: NextPage = ({ className = "" }) => {
  return (
    <div className={[styles.component3, className].join(" ")}>
      <Image
        className={styles.component1Icon1}
        width={24}
        height={24}
        alt=""
        src="/component-11.svg"
      />
      <div className={styles.container1}>
        <div className={styles.text}>Home</div>
      </div>
    </div>
  );
};

export default Menucomponent;
