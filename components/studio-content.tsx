import type { NextPage } from "next";
import styles from "./studio-content.module.css";

export type StudioContentType = {
  className?: string;
};

const StudioContent: NextPage<StudioContentType> = ({ className = "" }) => {
  return (
    <header className={[styles.studioContent, className].join(" ")}>
      <nav className={styles.studioContentInner}>
        <nav className={styles.aboutParent}>
          <a className={styles.about}>
            <ul className={styles.about1}>
              <li>About</li>
            </ul>
          </a>
          <div className={styles.featuresWrapper}>
            <a className={styles.features}>Features</a>
          </div>
          <a className={styles.studio}>Studio</a>
        </nav>
      </nav>
      <h1 className={styles.wonderpay}>WonderPay</h1>
    </header>
  );
};

export default StudioContent;
