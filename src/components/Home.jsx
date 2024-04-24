import "./Home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "L", "i", "l", "l", "y", "."];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);

    // Aufräumen: Timer löschen, um Lecks zu vermeiden
    return () => clearTimeout(timeout);
  }, []);

  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  const jobArray2 = ["&", " ", "A", "r", "t", "i", "s", "t"];

  return (
    <div className="container-homepage">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br></br>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br></br>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={32}
          />
          <br></br>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray2}
            idx={45}
          />
        </h1>
      </div>

      <img className="blue" src="/public/blau.png" alt="Logo" />
      <img className="orange" src="/public/orange.png" alt="Logo" />
      <img className="pink" src="/public/rosa.png" alt="Logo" />
    </div>
  );
};

export default Home;
