import { useState } from "react";
import './App.css';
import SimpleCalculator from "./SimpleCalculator";
import githubLogo from './assets/images/github.webp';

function App() {
  return (
    <>
      <header className="header">
        <h1>An Online Simple Calculator</h1>
        <img src={githubLogo} alt="GitHub Logo" width="50" height="50" />
      </header>
      <div className="calculator-wrapper">
        <SimpleCalculator />
      </div>
      <footer>
        <p className="Introduction">Hi, it’s Kaila here! ⭐</p>
        <p className="Letter">
        Welcome to my little corner of the internet, a Calculator Website specially crafted to brighten up your study or homework sessions. Think of it as math with a makeover: a cozy, aesthetic, scrapbook-inspired space where numbers feel a little less intimidating and a lot more fancy. 

        <br></br><br></br>Whether you're crunching equations, checking your science homework, or just pretending to be productive (we’ve all been there), I hope this site makes your day a bit lighter and your tasks a bit more かわいい. My goal was to create something that feels warm, approachable, and maybe even fun(?) because who said calculators have to be boring?

        <br></br><br></br>This project is a labor of love, built with React to ensure a smooth and responsive experience. It’s designed to be simple yet effective, so you can focus on what matters most, getting your work done with a smile.

        <br></br><br></br>As you explore this site, I hope you find it not only useful but also a little inspiring. Sometimes, even the smallest tools can bring a spark of joy to our daily routines. Whether you're a student, a professional, or just someone who loves numbers, this calculator is here to make your life a little easier and a lot more delightful.

        <br></br><br></br>If you have any suggestions, fun ideas, bug reports, emotional support requests, or you just want to say hi, feel free to reach out! You can find me over on GitHub @kailazanita! I love hearing from people who stumble upon my mini projects.

        <br></br><br></br>Thank you so much for choosing this website and for letting it be a part of your study vibes. Now go back to that work and calculate gorgeously! 
        </p>
        <p className="Copyright">&copy;ilacodes</p>
      </footer>
    </>
  );
}

export default App;
