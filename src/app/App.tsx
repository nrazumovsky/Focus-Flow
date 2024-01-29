import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "../pages/Home/Home";
import RootLayout from "../pages/RootLayout/RootLayout";
import Statistics from "../pages/Statistics/Statistics";
import store, { persistor } from "../shared/store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
