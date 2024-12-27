import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Loads the full library
import cssStyle from './FirstMessage.module.css';
import 'bootstrap/dist/css/bootstrap.css';

function FirstMessage() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const sentences = [
    'Get ready!!! 😍',
    'A little surprise is coming',
    'to make your 23rd birthday 🥳',
    'extra special!'
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      if (charIndex < sentences[currentSentenceIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + sentences[currentSentenceIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); // Animate each letter

        return () => clearTimeout(timeout);
      } else {
        const sentenceTimeout = setTimeout(() => {
          setCharIndex(0);
          setDisplayText('');
          setCurrentSentenceIndex(currentSentenceIndex + 1);
        }, 1500); // Delay before next sentence

        return () => clearTimeout(sentenceTimeout);
      }
    } else {
      const timer = setTimeout(() => {
        navigate('/second');
      }, 2000); // Delay before navigating

      return () => clearTimeout(timer);
    }
  }, [charIndex, currentSentenceIndex, navigate]);

  // Particles initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={`${cssStyle.messageContainer} d-flex align-items-center justify-content-center vh-100`}>
      {/* Particles Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000", // Fallback background color
            },
          },
          particles: {
            number: {
              value: 50, // Total particles
            },
            size: {
              value: 4, // Size of each particle
            },
            move: {
              enable: true,
              speed: 2, // Movement speed
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
            shape: {
              type: "circle",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Moves particles away when hovered
              },
            },
          },
        }}
      />
      {/* Text Animation */}
      <h1 className={`${cssStyle.h1} text-center`}>{displayText}<span className="fs-1">.....</span></h1>
    </div>
  );
}

export default FirstMessage;
