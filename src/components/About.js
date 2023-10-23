import React from "react";
import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState("");
  const phrases = ["Chetan Bagra"]; // Add your phrases here
  const delay = 150; // Delay between typing characters (in milliseconds)

  useEffect(() => {
    let currentPhrase = 0;
    let currentText = "";
    let typingTimeout;

    const type = () => {
      if (currentPhrase < phrases.length) {
        if (currentText.length < phrases[currentPhrase].length) {
          currentText += phrases[currentPhrase][currentText.length];
          setText(currentText);
          typingTimeout = setTimeout(type, delay);
        } else {
          currentPhrase++;
          setTimeout(erase, 1000); // Wait for a second before erasing
        }
      }
    };

    const erase = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setText(currentText);
        typingTimeout = setTimeout(erase, delay);
      } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500); // Wait for half a second before typing again
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-extrabold text-indigo-600">
            Hi, I am
            <br />
            <span className="text-indigo-400 text-6xl">{text}</span>
          </h1>

          <p className="mb-8 leading-relaxed">
          Passionate Computer Science student skilled in Python, C++, and JavaScript. Web developer and data science explorer. Open to tech collaborations and lifelong learning.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./DP.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
