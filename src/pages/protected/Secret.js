import React from "react";
import styles from "./Secret.module.css";
import colorFilter from "../../assets/colorfilter.svg";
import calendar from "../../assets/calendar.svg";
import filterIcon from "../../assets/filterIcon.svg";
import users from "../../assets/users.svg";
import inviteuser from "../../assets/inviteuser.svg";
import editIcon from "../../assets/editIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";
import home from "../../assets/home.svg";
import members from "../../assets/members.svg";
import settings from "../../assets/settings.svg";
import tasks from "../../assets/tasks.svg";
import downarrow from "../../assets/downarrow.svg";
import profileimage from "../../assets/profileimage.svg";
import addProject from "../../assets/addProject.svg";
import sidebarArrow from "../../assets/siderbar_arrow.svg";

export const Secret = () => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarHeaderContent}>
              <div className={styles.sidebarContent}>
                <img src={colorFilter} alt='nocolorfilterimage' />
                <p className={styles.sidebarHeaderContentText}>Project M.</p>
              </div>
              <img src={sidebarArrow} alt='nosidebararrowimage' />
            </div>
          </div>
          <div className={styles.sidebarMenu}>
            <div className={styles.sidebarHome}>
              <img src={home} alt='nohomeimage' />
              <p className={styles.sidebarMenuContentText}>Home</p>
            </div>
            <div className={styles.sidebarTasks}>
              <img src={tasks} alt='notaskimage' />
              <p className={styles.sidebarMenuContentText}>Tasks</p>
            </div>
            <div className={styles.sidebarMembers}>
              <img src={members} alt='nomemberimage' />
              <p className={styles.sidebarMenuContentText}>Members</p>
            </div>
            <div className={styles.sidebarSettings}>
              <img src={settings} alt='nosettingimage' />
              <p className={styles.sidebarMenuContentText}>Settings</p>
            </div>
            <div className={styles.sidebarLine}></div>
          </div>
          <div className={styles.sidebarProjects}>
            <div className={styles.addProject}>
              <p>my projects</p>
              <img src={addProject} alt='noprojectimage' />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectDetails}>
                <p className={styles.projectIndex}></p>
                <p className={styles.projectName}>Mobile App</p>
              </div>
              <div className={styles.projectDetails}>
                <p className={styles.projectIndex}></p>
                <p className={styles.projectName}>Website Redesign</p>
              </div>
              <div className={styles.projectDetails}>
                <p className={styles.projectIndex}></p>
                <p className={styles.projectName}>Design System</p>
              </div>
              <div className={styles.projectDetails}>
                <p className={styles.projectIndex}></p>
                <p className={styles.projectName}>Wireframes</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.maincontainerright}>
          <div className={styles.maincontainerrightHeader}>
            {/* <div className={styles.a}>
              <div className={styles.userText}>
                <p className={styles.userName}>Anima Agrawal</p>
                <p className={styles.userAddress}>U.P, India</p>
              </div>
              <img
                src={profileimage}
                alt='noprofileimage'
                className={styles.profileimage}
              />
              <img src={downarrow} alt='nodownarrowimage' />
            </div> */}
          </div>
          <div className={styles.maincontainerrightContent}>
            <div className={styles.projectnameandinvite}>
              <div className={styles.projectInfo}>
                <p>Mobile App</p>
                <img src={editIcon} alt='noediticonimage' />
                <img src={linkIcon} alt='nolinkiconimage' />
              </div>
              <div className={styles.inviteuserinfo}>
                <img
                  src={inviteuser}
                  alt='noinviteuserimage'
                  className={styles.inviteuserimage}
                />
                <p>Invite</p>
                <img
                  src={users}
                  alt='nousersimage'
                  className={styles.usersimage}
                />
              </div>
            </div>
            <div className={styles.filtersection}>
              <div className={styles.filter}>
                <img
                  src={filterIcon}
                  alt='nofiltericonimage'
                  className={styles.filtericonimage}
                />
                <p>Filter</p>
                <img
                  src={downarrow}
                  alt='nodownarrowimage'
                  className={styles.downarrowimage}
                />
              </div>
              <div className={styles.filterbydate}>
                <img
                  src={calendar}
                  alt='nocalendarimage'
                  className={styles.calendarimage}
                />
                <p>Today</p>
                <img
                  src={downarrow}
                  alt='nodownarrowimage'
                  className={styles.downarrowimage}
                />
              </div>
            </div>
            <div className={styles.tasksection}>
              <div className={styles.todosection}>
                <div className={styles.todoHeader}>
                  <p className={styles.tododot}></p>
                  <p className={styles.todotext}>To Do</p>
                  <p className={styles.todolength}>4</p>
                  <img
                    src={inviteuser}
                    alt='noinviteuserimage'
                    className={styles.todoimage}
                  />
                </div>
                <p className={styles.todoline}></p>
              </div>
              <div className={styles.onprogresssection}></div>
              <div className={styles.donesection}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secret;