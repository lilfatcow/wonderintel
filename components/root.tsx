import type { NextPage } from "next";
import CompanyName from "CompanyName";
import Menucomponent from "Menucomponent";
import styles from "./root.module.css";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.nestedSeparatorParent}>
        <div className={styles.nestedSeparator}>
          <div className={styles.separator} />
        </div>
        <div className={styles.component2Parent}>
          <CompanyName variant={1} text="Wonderland Studio" />
          <div className={styles.componentLayout}>
            <Menucomponent variant={1} text="Home" />
            <Menucomponent
              variant={2}
              text="Bill Pay"
              component3Height="40px"
              component3Top="unset"
            />
            <Menucomponent
              variant={3}
              text="Receivables"
              component3Height="40px"
              component3Top="unset"
            />
            <Menucomponent
              variant={4}
              text="WonderPay Capital"
              component3Height="40px"
              component3Top="unset"
            />
            <Menucomponent
              variant={5}
              text={`Clients & Vendors`}
              component3Height="40px"
              component3Top="unset"
            />
          </div>
          <Menucomponent
            variant={6}
            text="Settings"
            component3Height="40px"
            component3Top="unset"
          />
        </div>
        <div className={styles.nestedSeparator1}>
          <div className={styles.separator} />
        </div>
      </section>
    </div>
  );
};

export default Root;
