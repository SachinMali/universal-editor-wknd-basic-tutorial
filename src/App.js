/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./images/wknd-icon.svg";
import Home from "./components/Home";
import Person from "./components/Person";
import "./App.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <script
            src="https://universal-editor-service.experiencecloud.live/corslib/LATEST"
            async
          />
          <meta
            name="urn:adobe:aue:system:aemconnection"
            content={`aem:https://author-p46652-e1315962.adobeaemcloud.com`}
          />
        </Helmet>
        <Router>
          <header>
            <Link to={"/universal-editor-wknd-basic-tutorial"}>
              <img src={logo} className="logo" alt="WKND Logo" />
            </Link>
            <hr />
          </header>
          <Routes>
            <Route
              path="/universal-editor-wknd-basic-tutorial"
              element={<Home />}
            />
            <Route path="/person/:fullName" element={<Person />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
