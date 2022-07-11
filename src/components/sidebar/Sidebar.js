import React from 'react'
import styles from "../sidebar/Sidebar.module.css";
import colorFilter from "../../assets/colorfilter.svg";
import sidebarArrow from "../../assets/siderbar_arrow.svg";
const Sidebar = () => {
  return (
    <div>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarHeaderContent}>
              <div className={styles.sidebarContent}>
                <img src={colorFilter} alt='nocolorfilterimage' />
                <p className={styles.sidebarHeaderContentText}>Project</p>
              </div>
              <img src={sidebarArrow} alt='nosidebararrowimage' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar