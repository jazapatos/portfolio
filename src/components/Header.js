import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "random@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // If scrolling down, hide the header
    if (currentScrollY > prevScrollY) {
      setShowHeader(false);
    } else {
      // If scrolling up, show the header
      setShowHeader(true);
    }

    // Remember the current scroll position for the next move
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    // Set up scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <Box
      ref={headerRef}
      className={`navbar ${showHeader ? "" : "hidden"}`}
      style={{
        height: "4rem",
        width: "100%",
        position: "fixed",
        top: 0,
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "#18181b",
        transform: `translateY(${showHeader ? 0 : -200}px)`,}}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${social.icon.iconName}`}
            >
            <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {<a href="/#projects" onClick={handleClick("projects")}>Projects</a>}
              {<a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
