import React from "react";
import "./Header.css"; // keep your existing styles

export default function Header() {
  return (
    <header>
      <h1>Deb Samanta ITIS 3135</h1>
      <nav>
        <a href="index.html" className="button-link">Home</a>
        <a href="/contract.html" className="button-link">Course Contract</a>
       <a href="/introduction.html" className="button-link">Introduction</a>

        <a href="SamantaCorp.com/index.html" className="button-link">Samanta Corp</a>
        <a href="WebsiteEvaluation.html" className="button-link">Website Evaluation</a>
        <a href="stuff/index.html" className="button-link">CRAPPY PAGE</a>
        <a href="fccfsjs_outline.html" className="button-link">FCC FSJS Outline</a>
        <a href="hobby/index.html" className="button-link">Hobby Project</a>
        <a href="intro.html" className="button-link">Introduction Form</a>
      </nav>
    </header>
  );
}
