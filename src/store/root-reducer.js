import { combineReducers } from "redux";
import userReducer from './userSlice';
// // import moduleReducer from "./moduleReducer";
// import productReducer from '../store/producSlice';
import bodyReducer from "../store/bodyReducer";
import notesReducer from "../store/notesReducers";
import titleReducer from "../store/titleReducer";



const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer,
    title: titleReducer,
    body: bodyReducer
    // product: productReducer,

    // data: moduleReducer,
});

export default rootReducer;