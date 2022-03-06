import React from "react";
import { Container } from "reactstrap";
import Card from "./components/Card";
import Button from "./components/Button";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {

    return (
      <>
      <main className="container">
        <h2>Frontend Mentor Challenge - API Advice Slip</h2>
        <div className="App">
          <Card />
          <Button />
        </div>
        <Footer />
      </main>
      </>
    );
  }
