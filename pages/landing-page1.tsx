import type { NextPage } from "next";
import Image from "next/image";
import StudioContent from "../components/studio-content";
import styles from "./landing-page1.module.css";

const LandingPage1: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.background}>
        <div className={styles.background1} />
        <StudioContent />
        <section className={styles.footer}>
          <div className={styles.byWonderlandStudio}>By Wonderland Studio</div>
          <div className={styles.footerInner}>
            <div className={styles.wonderpayByWonderlandStudioParent}>
              <div
                className={styles.wonderpayByWonderland}
              >{`WonderPay by Wonderland Studio is a private bill pay and payments automation platform to streamline AP & AR and offer working capital solutions for our clients, partners and colleagues in music, entertainment and luxury hospitality.`}</div>
              <div className={styles.frame}>
                <div className={styles.wrap}>
                  <div className={styles.button}>
                    <div className={styles.logIn}>Log In</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.imageParent}>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={86}
            height={68}
            alt=""
            src="/image@2x.png"
          />
          <div className={styles.frame1}>
            <div className={styles.wrap}>
              <div className={styles.button1}>
                <div className={styles.inquire}>Inquire</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.inquireWrapper}>
        <a className={styles.inquire1}>Inquire</a>
      </div>
    </div>
  );
};

export default LandingPage1;
