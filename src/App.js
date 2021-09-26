import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./components/loginPage";
import "./main.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
};

const App = () => {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
};

export default App;
