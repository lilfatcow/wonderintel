import type { NextPage } from "next";
import Image from "next/image";
import styles from "./component-2.module.css";

const CompanyName: NextPage = ({ className = "" }) => {
  return (
    <div className={[styles.component2, className].join(" ")}>
      <Image
        className={styles.component1Icon}
        width={24}
        height={24}
        alt=""
        src="/component-1.svg"
      />
      <div className={styles.container}>
        <div className={styles.text}>Wonderland Studio</div>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default CompanyName;
