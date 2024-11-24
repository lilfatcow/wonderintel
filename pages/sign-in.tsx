import type { NextPage } from "next";
import PasswordInput from "../components/password-input";
import styles from "./sign-in.module.css";

const SignIn: NextPage = () => {
  return (
    <div className={styles.signIn}>
      <main className={styles.root}>
        <div className={styles.image} />
        <h1 className={styles.signIn1}>Sign In</h1>
        <section className={styles.signInForm}>
          <div className={styles.emailField}>
            <div className={styles.emailInput}>
              <div className={styles.emailExample}>
                <div className={styles.email}>Email</div>
                <div className={styles.emailDomain}>
                  <div className={styles.background} />
                  <input
                    className={styles.nameexamplecom}
                    placeholder="name@example.com"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <button className={styles.continueButton}>
              <div className={styles.background1} />
              <div className={styles.continue}>Continue</div>
            </button>
          </div>
        </section>
        <section className={styles.passwordInputWrapper}>
          <PasswordInput />
        </section>
      </main>
    </div>
  );
};

export default SignIn;
