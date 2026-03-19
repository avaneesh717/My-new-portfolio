import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./Background.css";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ["repulse", "push"],
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          repulse: {
            distance: 300,
            duration: 0.6,
            speed: 1,
          },
          push: {
            quantity: 4,
          },
          grab: {
            distance: 250,
            links: {
              opacity: 0.5,
              color: "#60a5fa",
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#3b82f6", "#60a5fa", "#818cf8", "#a78bfa", "#34d399", "#f472b6", "#ffffff"],
        },
        links: {
          color: "#3b82f6",
          distance: 150,
          enable: true,
          opacity: 0.12,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.02,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.15, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
            minimumValue: 0.15,
          },
        },
        shape: {
          type: ["circle", "char"],
          options: {
            char: [
              { value: "{ }", font: "monospace", style: "", weight: "400" },
              { value: "< >", font: "monospace", style: "", weight: "400" },
              { value: "[ ]", font: "monospace", style: "", weight: "400" },
              { value: "=>", font: "monospace", style: "", weight: "400" },
              { value: "//", font: "monospace", style: "", weight: "400" },
            ],
          },
        },
        size: {
          value: { min: 4, max: 14 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 4,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: 1,
            color: {
              value: ["#60a5fa", "#a78bfa", "#34d399"],
            },
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="particles-container"
      />
    );
  }

  return <></>;
};

export default Background;
