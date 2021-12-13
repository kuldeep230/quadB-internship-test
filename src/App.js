import React, { useEffect } from "react";
import GlobalStyle from "./theme/GlobalStyle";
//Components
import Shows from "./components/Shows";
import { Routes, Route } from "react-router-dom";
import ShowItem from "./templates/ShowItem";

const App = () => {
  const user = {};
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    if (userName && userEmail) {
      user.name = userName;
      user.email = userEmail;
    }
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Shows user={user} />} />
        <Route path="/shows/:show" element={<ShowItem />} />
      </Routes>
    </>
  );
};

export default App;
