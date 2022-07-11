import React from "react";
import home from "../../assets/home.svg";
import members from "../../assets/members.svg";
import settings from "../../assets/settings.svg";
import tasks from "../../assets/tasks.svg";
import addProject from "../../assets/addProject.svg";
import styles from "../sidebarbody/Sidebarbody.module.css";
import NotesList from "../Module/NotesList";
import SingleNote from "../Module/SingleNote";
import AddNote from "../Module/AddNote";

const Sidebarbody = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.section}>
          <div>
            <ul className={styles.checklist}>
              <li className={styles.down}>
                <img src={home} className={styles.image} alt="nohomeimage" />
                Home
              </li>
              <li>
                <img src={tasks} className={styles.image} alt="task" />
                Tasks
              </li>
              <li>
                <img src={settings} className={styles.image} alt="settings" />
                Members
              </li>
              <li>
                <img src={members} className={styles.image} alt="member" />
                Settings
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Sidebarbody;
