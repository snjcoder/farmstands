import { useState } from "react";

import ApiData from "./components/ApiData";
import Navbar from "./components/Navbar/Navindex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/SignUp/Form";
import PopUpDialog from "./components/SignUp/PopUpDialog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={"Hello Team"}></Route>
          <Route path="/about" element={"Farm"}></Route>
          <Route path="/contact-us" element={"Information"}></Route>
          <Route path="/location" element={<ApiData />}></Route>
          <Route path="/sign-up" element={<PopUpDialog />}></Route>
          <Route path="/sign-in" element={"Sign In Form"}></Route>
          <Route path="/cart" element={"Details"}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
