import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { accounts } from "../data";
import { useState } from "react";
import { Paper } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function Accounts() {
  const imageWidth = 500;
  const imageHeight = 500;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % accounts.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + accounts.length) % accounts.length
    );
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Accounts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Stay connected with me across various platforms. Connect, follow, and engage with my professional journey.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={3} style={{ width: '300px', height: '300px' }}>
            <a href={accounts[currentSlide].url} target="_blank">
              <img
                src={accounts[currentSlide].image}
                alt={accounts[currentSlide].name}
                style={{ height: '100%', width: '100%' }}
              />
            </a>
            </Paper>
        </div>
        <ArrowLeftIcon onClick={previousSlide} />
        <ArrowRightIcon onClick={nextSlide} />
      </div>
    </section>
  );
}
