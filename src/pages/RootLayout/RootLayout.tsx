import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header/Header";

function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
