"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import useWindowDimensions from "../../utils/hooks/ResizeHandler";
import HeroSection from "./HomeComponents/HeroSection";
import ProjectSection from "./HomeComponents/ProjectsSection";
import ExperienceSection from "./HomeComponents/ExperienceSection";
//import Particles  from "react-particles-js"; //particles js
// const Particles = lazy(() => import("react-tsparticles"));

function FrontPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        {/* <Particles
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            zIndex: "-5",
          }}
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.2,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: width > 600 ? 20 : 10,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: width > 600 ? 5 : 3,
              },
            },
            detectRetina: true,
          }}
        /> */}
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
      </Box>
    </motion.div>
  );
}

export default FrontPage;
