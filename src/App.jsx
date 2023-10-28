import "./app.scss";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Website from "./Pages/Website";
import Login from "./Pages/Login/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Fragment>
      <BrowserRouter className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics/>
    </Fragment>
  );
}

export default App;
