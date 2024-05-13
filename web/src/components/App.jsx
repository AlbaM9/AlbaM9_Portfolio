import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Project from "./Project";
import "../scss/App.scss";



function App() {
  return (
    <>
      <Header />
      <section className="Introduction">

      </section>
      <section className="About">

      </section>
      <section className="Passions">

      </section>
      <section className="Skills">

      </section>

      <section className="Porfolio">
        <div className="web">
          <div className="projects">
            <Project />

          </div>

        </div>
        <div className="Others"></div>

      </section>
      <section className="Contact">
        <div className="web"></div>
        <div className="Others"></div>

      </section>

    </>
  )

}

export default App;
