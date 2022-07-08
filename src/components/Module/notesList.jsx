import { useDispatch, useSelector } from "react-redux";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";
import { add } from "../../acions/index";
import SingleNote from "./singleNote";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { app } from "../../firebase/firebase";



function NotesList() {

    const notes = useSelector(store => store.notes);






    return ( 
        <div className="notes-list">
            {
               notes.length <= 0 ? <h3>No Notes Found</h3> : notes.map((note,index) => {
                   return <SingleNote 
                            id={note.id}
                            key={index}
                            title={note.title}
                            date={note.date}
                        />
               })
            }
           
        </div>
     );
}

export default NotesList;