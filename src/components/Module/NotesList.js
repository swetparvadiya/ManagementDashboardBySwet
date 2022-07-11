import { useSelector } from "react-redux";
import SingleNote from "./SingleNote";
import styles from "./Notelist.module.css";



function NotesList() {

    const notes = useSelector(store => store.notes);






    return ( 
        <div className="notes-list">
            <ul className={styles.checklist}>
        <li className={styles.list}>{
               notes.length <= 0 ? <h3>No Notes Found</h3> : notes.map((note,index) => {
                   return <SingleNote 
                            id={note.id}
                            key={index}
                            title={note.title}
                            date={note.date}
                        />
               })
               
            }
            </li>
      </ul>

            
           
        </div>
     );
}

export default NotesList;