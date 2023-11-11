import { useState } from "react";
import styles from "./TabsUser.module.css";
import { Divider } from "@mui/material";
import { tabs } from "./tabs";
const TabsUser = ({ handleClose }) => {
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = () => {
    setCurrentTab(event.target.id);
  };

  return (
    <div className={styles.container}>
      <Divider color="white" style={{ margin: "20px 0px " }} />
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className={styles.btn}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      {/* <Divider color="white" style={{ margin: "20px 0px " }} /> */}
      <div className={styles.content}>
        {tabs.map(({ id, Element }, i) => (
          <div key={i}>
            {currentTab === `${id}` && <Element handleClose={handleClose} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsUser;
