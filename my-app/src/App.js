

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Show from "./components/Show";
import Posts from "./components/Posts";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="show/:id" element={<Show />}></Route>
        </Routes>
      </div>
    );
  }
}
