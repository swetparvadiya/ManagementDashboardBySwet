import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";


// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import createSagaMiddleware from "@redux-saga/core";
// import rootSaga from "./sagas";

// const sagaMiddleware= createSagaMiddleware();

// const middleware = [sagaMiddleware];


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

