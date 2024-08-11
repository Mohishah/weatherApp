import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./weather/weatherSaga";

// const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: weatherReducer
})

//saga
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(sagaMiddleware)))
// sagaMiddleware.run(rootSaga)



export default store;

// npm install @reduxjs/toolkit
// npm install redux-saga