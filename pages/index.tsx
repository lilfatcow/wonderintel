import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.frame}>
        <div className={styles.wrap}>
          <div className={styles.wonderpay}>WonderPay</div>
          <Image
            className={styles.imageIcon}
            width={86}
            height={68}
            alt=""
            src="/image2@2x.png"
          />
          <div className={styles.byWonderlandStudio}>By Wonderland Studio</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div
          className={styles.wonderpayByWonderland}
        >{`WonderPay by Wonderland Studio is a private bill pay and payments automation platform to streamline AP & AR and offer working capital solutions for our clients, partners and colleagues in music, entertainment and luxury hospitality.`}</div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.wrap1}>
          <div className={styles.button}>
            <div className={styles.inquire}>Inquire</div>
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.wrap1}>
          <div className={styles.button1}>
            <div className={styles.inquire}>Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
