import { useState } from 'react';
import styles from './TabsUser.module.css';
import { tabs } from './tabs';
const TabsUser = ({ handleClose }) => {
  const [currentTab, setCurrentTab] = useState('1');
  const handleTabClick = () => {
    setCurrentTab(event.target.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {tabs.map(({ id, Element }, i) => (
          <div key={i}>
            {currentTab === `${id}` && <Element handleClose={handleClose} />}
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default TabsUser;
