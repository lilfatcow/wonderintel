import type { NextPage } from "next";
import Image from "next/image";
import styles from "./password-input.module.css";

export type PasswordInputType = {
  className?: string;
};

const PasswordInput: NextPage<PasswordInputType> = ({ className = "" }) => {
  return (
    <div className={[styles.passwordInput, className].join(" ")}>
      <div className={styles.passwordLabel}>
        <button className={styles.passwordHint}>
          <div className={styles.background} />
          <div className={styles.signInWith}>Sign in with passkey</div>
        </button>
      </div>
      <div className={styles.alternativeSignIn}>
        <div className={styles.divider}>
          <Image
            className={styles.backgroundIcon}
            loading="lazy"
            width={315}
            height={2}
            alt=""
            src="/background@2x.png"
          />
        </div>
        <div className={styles.orSignIn}>or sign in with</div>
        <div className={styles.divider}>
          <Image
            className={styles.backgroundIcon}
            loading="lazy"
            width={315}
            height={2}
            alt=""
            src="/background@2x.png"
          />
        </div>
      </div>
      <div className={styles.socialLogin}>
        <div className={styles.appleLogin}>
          <div className={styles.background1} />
          <div className={styles.appleButton}>
            <Image
              className={styles.imageIcon}
              width={26}
              height={32}
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <div className={styles.apple}>Apple</div>
        </div>
        <div className={styles.appleLogin1}>
          <div className={styles.background2} />
          <div className={styles.imageWrapper}>
            <Image
              className={styles.imageIcon1}
              loading="lazy"
              width={28}
              height={28}
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className={styles.google}>Google</div>
        </div>
      </div>
      <div className={styles.studioAttribution}>
        <div className={styles.attributionLogoParent}>
          <div className={styles.attributionLogo}>
            <Image
              className={styles.imageIcon2}
              loading="lazy"
              width={73}
              height={58}
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className={styles.poweredByWonderland}>
            Powered by Wonderland Studio
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
