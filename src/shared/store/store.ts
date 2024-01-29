import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import setStatisticsMetricsReducer from "../../widgets/Statistics/reducers/setStatisticsMetricsSlice";
import setCountTimerRoundsValueReducer from "./reducers/setCountTimerRoundsValue";
import setGlobalTimerReducer from "./reducers/setGlobalTimer";
import setOpenSettingsPanelReducer from "./reducers/setOpenSettingsPanelSlice";
import setOpenTaskEditFormReducer from "./reducers/setOpenTaskSlice";
import setTaskReducer from "./reducers/setTaskSlice";
import setTimerControlsReducer from "./reducers/setTimerControlsSlice";
import setTimerDurationReducer from "./reducers/setTimerDuration";
import setTimerTypeReducer from "./reducers/setTimerType";
import setToggleTaskPanelReducer from "./reducers/setToggleTaskPanelSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  setTaskReducer,
  setToggleTaskPanelReducer,
  setOpenTaskEditFormReducer,
  setTimerControlsReducer,
  setOpenSettingsPanelReducer,
  setCountTimerRoundsValueReducer,
  setTimerDurationReducer,
  setTimerTypeReducer,
  setStatisticsMetricsReducer,
  setGlobalTimerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

const store = setStore();

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore["dispatch"];
