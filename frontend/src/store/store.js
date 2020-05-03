import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), devToolsEnhancer())
);

sagaMiddleware.run(rootSaga);