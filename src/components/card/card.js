import { React, useEffect } from "react";
import styles from "./dashboard.module.css";
import downarrow from "../../assets/downarrow.svg";
import { bodyChange } from "../../action/body";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import files from "../../assets/files.png";
import comments from "../../assets/comments.png";
import editdeleteproject from "../../assets/editdeleteproject.svg";
import inviteuser from "../../assets/inviteuser.svg";
import editIcon from "../../assets/editIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";
import calendar from "../../assets/calendar.svg";
import filterIcon from "../../assets/filterIcon.svg";
import users from "../../assets/users.svg";
import user from "../../assets/user.png";
import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Fetch_Task } from "../../action/body";
const TaskDetail = () => {
  const [classname, setSetClassName] = useState(false);
  const [taskId, setTaskId] = useState();
  const [onProgressData, setOnProgressData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [onTodoData, setOnTodoData] = useState([]);
  const dispatch = useDispatch();
  const taskDetail = useSelector((state) => state.taskReducer);
  const slug = useParams();
  const projectDetail = useSelector((state) => state.projectReducer);
  const currentProject = projectDetail.find(
    (item) => item.id === slug.projectId
  );

  const fetchTaskData = async () => {
    try {
      const q = query(collection(db, "task"));
      const doc = await getDocs(q);
      // const data = doc.docs[0].data();
      // const dataId = doc.docs[0].id;
      doc.forEach((doc) => {
        dispatch(Fetch_Task(doc.data()));
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    let taskdata = taskDetail.filter(
      (item) => item.projectId === slug.projectId
    );
    setTaskData(taskdata);
  }, [taskDetail, slug]);

  const getProjectId = (id) => {
    setTaskId(id);
  };

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    if (source.droppableId === "Todo") {
      const data = onTodoData.filter((item) => item.id !== draggableId);
      setOnTodoData(data);
    }
    if (source.droppableId === "onProgress") {
      const data = onProgressData.filter((item) => item.id !== draggableId);
      setOnProgressData(data);
    }
    if (source.droppableId === "done") {
      const data = doneData.filter((item) => item.id !== draggableId);
      setDoneData(data);
    }
    if (destination.droppableId === "Todo") {
      const data = taskData.find((item) => item.id === draggableId);
      data.status = "Todo";
      const q = query(collection(db, "task"), where("id", "==", draggableId));
      const querySnapshot = await getDocs(q);
      let docId;
      querySnapshot.forEach((doc) => {
        docId = doc.id;
      });
      const collectionRef = doc(db, "task", docId);
      await updateDoc(collectionRef, {
        status: "Todo",
        taskname: data.taskname,
        taskdescription: data.taskdescription,
        taskpriority: data.taskpriority,
      });
      dispatch(bodyChange(data));
    }
    if (destination.droppableId === "onProgress") {
      const data = taskData.find((item) => item.id === draggableId);
      data.status = "onProgress";
      const q = query(collection(db, "task"), where("id", "==", draggableId));
      const querySnapshot = await getDocs(q);
      let docId;
      querySnapshot.forEach((doc) => {
        docId = doc.id;
      });
      const collectionRef = doc(db, "task", docId);
      await updateDoc(collectionRef, {
        status: "onProgress",
        taskname: data.taskname,
        taskdescription: data.taskdescription,
        taskpriority: data.taskpriority,
      });
      dispatch(bodyChange(data));
    }
    if (destination.droppableId === "done") {
      const data = taskData.find((item) => item.id === draggableId);
      data.status = "done";
      const q = query(collection(db, "task"), where("id", "==", draggableId));
      const querySnapshot = await getDocs(q);
      let docId;
      querySnapshot.forEach((doc) => {
        docId = doc.id;
      });
      const collectionRef = doc(db, "task", docId);
      await updateDoc(collectionRef, {
        status: "done",
        taskname: data.taskname,
        taskdescription: data.taskdescription,
        taskpriority: data.taskpriority,
      });
      dispatch(bodyChange(data));
    }
  };

  useEffect(() => {
    if (taskData) {
      const onpData = taskData.filter((item) => item.status === "onProgress");
      setOnProgressData(onpData);
    }
  }, [taskData]);

  useEffect(() => {
    const ontData = taskData.filter((item) => item.status === "Todo");
    setOnTodoData(ontData);
  }, [taskData]);

  useEffect(() => {
    const doneData = taskData.filter((item) => item.status === "done");
    setDoneData(doneData);
  }, [taskData]);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.projectnameandinvite}>
          <div className={styles.projectInfo}>
            {currentProject ? <p>{currentProject.projectname}</p> : ""}
            <img src={editIcon} alt="noediticonimage" />
            <img src={linkIcon} alt="nolinkiconimage" />
          </div>
          <div className={styles.inviteuserinfo}>
            <img
              src={inviteuser}
              alt="noinviteuserimage"
              className={styles.inviteuserimage}
            />
            <p>Invite</p>
            <img src={users} alt="nousersimage" className={styles.usersimage} />
          </div>
        </div>
        <div className={styles.filtersection}>
          <div className={styles.filter}>
            <img
              src={filterIcon}
              alt="nofiltericonimage"
              className={styles.filtericonimage}
            />
            <p>Filter</p>
            <img
              src={downarrow}
              alt="nodownarrowimage"
              className={styles.downarrowimage}
            />
          </div>
          <div className={styles.filterbydate}>
            <img
              src={calendar}
              alt="nocalendarimage"
              className={styles.calendarimage}
            />
            <p>Today</p>
            <img
              src={downarrow}
              alt="nodownarrowimage"
              className={styles.downarrowimage}
            />
          </div>
        </div>
        <div className={styles.tasksection}>
          <Droppable droppableId="Todo">
            {(provided) => (
              <div
                className={styles.todosection}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className={styles.todoHeader}>
                  <p className={styles.tododot}></p>
                  <p className={styles.todotext}>To Do</p>
                  <p className={styles.todolength}>{onTodoData.length}</p>
                  <img
                    src={inviteuser}
                    alt="noinviteuserimage"
                    className={styles.todoimage}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleTaskModal"
                  />
                </div>
                <p className={styles.todoline}></p>
                {onTodoData.length > 0 ? (
                  onTodoData.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className={`${styles.task} ${
                            classname && "dragtask"
                          }`}
                          key={index}
                          index={index}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className={styles.taskHeader}>
                            <div className={styles.taskPriority}>
                              <p className={styles.taskpriorityText}>
                                {item.taskpriority}
                              </p>
                            </div>
                            <img
                              src={editdeleteproject}
                              alt="noeditdeletetask"
                              className="dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleTaskEditModal"
                                  onClick={() => getProjectId(item.id)}
                                >
                                  Edit Task
                                </p>
                              </li>
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleDeleteTaskModal"
                                  onClick={() => getProjectId(item.id)}
                                >
                                  Delete Task
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.taskName}>{item.taskname}</div>
                          <div className={styles.taskDescription}>
                            {item.taskdescription}
                          </div>
                          <div className={styles.taskFooter}>
                            <img
                              src={user}
                              alt="nouserImage"
                              className={styles.userImage}
                            />
                            <div className={styles.comments}>
                              <img
                                src={comments}
                                alt="nocommentsImage"
                                className={styles.commentsImage}
                              />
                              <p className={styles.commentsText}>12 comments</p>
                            </div>
                            <div className={styles.files}>
                              <img
                                src={files}
                                alt="nofilesImage"
                                className={styles.filesImage}
                              />
                              <p className={styles.filesText}>0 files</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div className={styles.task}>No Task Available</div>
                )}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="onProgress">
            {(provided) => (
              <div
                className={styles.onprogresssection}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className={styles.onprogressHeader}>
                  <p className={styles.onprogressdot}></p>
                  <p className={styles.onprogresstext}>On Progress</p>
                  <p className={styles.onprogresslength}>
                    {onProgressData?.length}
                  </p>
                </div>
                <p className={styles.onprogressline}></p>
                {onProgressData.length > 0 ? (
                  onProgressData.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className={styles.task}
                          key={index}
                          index={index}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className={styles.taskHeader}>
                            <div className={styles.taskPriority}>
                              <p className={styles.taskpriorityText}>
                                {item.taskpriority}
                              </p>
                            </div>
                            <img
                              src={editdeleteproject}
                              alt="noeditdeletetask"
                              className="dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleEditModal"
                                >
                                  Edit Task
                                </p>
                              </li>
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleDeleteTaskModal"
                                  onClick={() => getProjectId(item.id)}
                                >
                                  Delete Task
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.taskName}>{item.taskname}</div>
                          <div className={styles.taskDescription}>
                            {item.taskdescription}
                          </div>
                          <div className={styles.taskFooter}>
                            <img
                              src={user}
                              alt="nouserImage"
                              className={styles.userImage}
                            />
                            <div className={styles.comments}>
                              <img
                                src={comments}
                                alt="nocommentsImage"
                                className={styles.commentsImage}
                              />
                              <p className={styles.commentsText}>12 comments</p>
                            </div>
                            <div className={styles.files}>
                              <img
                                src={files}
                                alt="nofilesImage"
                                className={styles.filesImage}
                              />
                              <p className={styles.filesText}>0 files</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div className={styles.task}>No Task Available</div>
                )}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="done">
            {(provided) => (
              <div
                className={styles.donesection}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className={styles.onprogressHeader}>
                  <p className={styles.onprogressdot}></p>
                  <p className={styles.onprogresstext}>On Progress</p>
                  <p className={styles.onprogresslength}>{doneData?.length}</p>
                </div>
                <p className={styles.doneline}></p>
                {doneData.length > 0 ? (
                  doneData.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className={styles.task}
                          key={index}
                          index={index}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className={styles.taskHeader}>
                            <div className={styles.taskPriority}>
                              <p className={styles.taskpriorityText}>
                                {item.taskpriority}
                              </p>
                            </div>
                            <img
                              src={editdeleteproject}
                              alt="noeditdeletetask"
                              className="dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleEditModal"
                                >
                                  Edit Task
                                </p>
                              </li>
                              <li>
                                <p
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleDeleteTaskModal"
                                  onClick={() => getProjectId(item.id)}
                                >
                                  Delete Task
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.taskName}>{item.taskname}</div>
                          <div className={styles.taskDescription}>
                            {item.taskdescription}
                          </div>
                          <div className={styles.taskFooter}>
                            <img
                              src={user}
                              alt="nouserImage"
                              className={styles.userImage}
                            />
                            <div className={styles.comments}>
                              <img
                                src={comments}
                                alt="nocommentsImage"
                                className={styles.commentsImage}
                              />
                              <p className={styles.commentsText}>12 comments</p>
                            </div>
                            <div className={styles.files}>
                              <img
                                src={files}
                                alt="nofilesImage"
                                className={styles.filesImage}
                              />
                              <p className={styles.filesText}>0 files</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div className={styles.task}>No Task Available</div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskDetail;
