//@ts-nocheck
import { createStore, applyMiddleware, Store } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { compose } from "redux";

import { rootEpic, rootReducer } from "./modules/root";

const initialState = {};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store: Store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(hotReloadingEpic);
  return store;
}

const epic$ = new BehaviorSubject(rootEpic);
const hotReloadingEpic = (...args: []) =>
  epic$.pipe(switchMap((epic) => epic(...args)));

if (module.hot) {
  module.hot.accept(() => {
    const nextEpic = require("./modules/root").rootEpic;
    epic$.next(nextEpic);
  });
}
