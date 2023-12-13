import React, { useEffect } from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VotePage from "../votepage/VotePage";

function Header(props) {
  useEffect(() => {
    props.getItems();
  }, []);

  console.log(props.isAdmin);

  return (
    <Router>
      <section id="header" className="header">
        <nav>
          <div className="topnav">
            {props.isAdmin && localStorage.currentpage === "votingPage" && (
              <>
                <Link to="/">Root</Link>
                <Link to="voting">Vote</Link>
              </>
            )}
            {/* {props.isAdmin && localStorage.currentpage === "adminPage" && ( */}
            {/* // <Link to="logout">Log Out</Link> */}
            {/* )} */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<div>Landing</div>} />
          <Route path="voting" element={<VotePage />} />
          {/* <Route path="logout" element={<LogOut />} /> */}
        </Routes>
      </section>
    </Router>
  );
}

export default Header;
