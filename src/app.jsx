import { useState } from "preact/hooks";
import React from "react";
import "./app.css";
import SignInForm from "./components/signIn/SignInForm";
import Header from "./components/header/Header";
import VotePage from "./components/votepage/VotePage";

const App = () => {
  return (
    <main>
      <div>
        <SignInForm />
        <Header />
        <VotePage />
      </div>
    </main>
  );
};

export default App;
