import type { NextPage } from "next";
import styles from "./wonder-dash.module.css";

const WonderDash: NextPage = () => {
  return (
    <div className={styles.wonderDash}>
      <div className={styles.root}>
        <div className={styles.groups}>
          <div className={styles.frame}>
            <div className={styles.image} />
          </div>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.component2}>
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
              <div className={styles.frame3}>
                <div className={styles.separator} />
              </div>
              <div className={styles.component3}>
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
              <div className={styles.component31}>
                <Image
                  className={styles.component1Icon1}
                  width={24}
                  height={24}
                  alt=""
                  src="/component-12.svg"
                />
                <div className={styles.container1}>
                  <div className={styles.text}>Bill Pay</div>
                </div>
              </div>
              <div className={styles.component32}>
                <Image
                  className={styles.component1Icon1}
                  width={24}
                  height={24}
                  alt=""
                  src="/component-13.svg"
                />
                <div className={styles.container1}>
                  <div className={styles.text}>Receivables</div>
                </div>
              </div>
              <div className={styles.component33}>
                <Image
                  className={styles.component1Icon1}
                  width={24}
                  height={24}
                  alt=""
                  src="/component-14.svg"
                />
                <div className={styles.container1}>
                  <div className={styles.text}>WonderPay Capital</div>
                </div>
              </div>
              <div className={styles.component34}>
                <Image
                  className={styles.component1Icon1}
                  width={24}
                  height={24}
                  alt=""
                  src="/component-15.svg"
                />
                <div className={styles.container1}>
                  <div className={styles.text}>{`Clients & Vendors`}</div>
                </div>
              </div>
              <div className={styles.component35}>
                <Image
                  className={styles.component1Icon1}
                  width={24}
                  height={24}
                  alt=""
                  src="/component-16.svg"
                />
                <div className={styles.container1}>
                  <div className={styles.text}>Settings</div>
                </div>
              </div>
              <div className={styles.frame4}>
                <div className={styles.separator} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonderDash;
