import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas.js";

import rootReducer from "./root-reducer";

const sagaMiddlweware = createSagaMiddleware();

const middlewares = [sagaMiddlweware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlweware.run(fetchCollectionsStart);

export const persistor = persistStore(store);


