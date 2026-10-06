import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faAward } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import faCreddly from '../images/credly-icon.png'
import { Box, HStack, Text, Image, Flex } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: test@example.com",
    label: "Email",
  },
  {
    icon: faPhone,
    url: "",
    label: "CellPhone",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    label: "Github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    label: "Linkedin",
  },
  {
    icon: faAward,
    url: "https://www.credly.com/users/maikol-ocampo-chinchilla",
    label: "Award",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const isClickScrolling = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (isClickScrolling.current) {
        prevScrollPos = currentScrollPos;
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      //window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const headerElement = headerRef.current;
      isClickScrolling.current = true;
      if (headerElement) {
        if (anchor === "aboutme") {
          headerElement.style.transform = "translateY(0)";
        } else {
          headerElement.style.transform = "translateY(-200px)";
        }
      }
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }

  };

  return (
    <Box
      ref={headerRef}
      position={{ base: "static", md: "fixed" }}
      top={{ md: "0" }}
      left={{ md: "0" }}
      right={{ md: "0" }}
      translateY={{ md: "0" }}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      borderBottom="2px solid #00DFD8"
      zIndex={10}
      w="100%"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex as="nav"
            display={{ base: "none", md: "flex" }}
            flexDirection={{ base: "row", md: "column" }}
          >
            <HStack spacing={8} >
              {socials.map((item) => (
                <a className="father-icon" key={item.icon} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <FontAwesomeIcon icon={item.icon} size="2x" key={item.icon} className="child-icon" />
                </a>
              ))}
            </HStack>
          </Flex>
          <nav>
            <HStack spacing={8} fontWeight="semibold">
              <a href="/#landing" onClick={handleClick('aboutme')} ><Text _hover={{ color: "#00DFD8", transition: "all 0.3s ease" }}>About me</Text></a>
              <a href="/#projects" onClick={handleClick('projects')} ><Text _hover={{ color: "#00DFD8", transition: "all 0.3s ease" }}>Projects</Text></a>
              <a href="/#certificates" onClick={handleClick('certificates')} ><Text _hover={{ color: "#00DFD8", transition: "all 0.3s ease" }}>Certificates</Text></a>
              <a href="/#contact-me" onClick={handleClick('contactme')} ><Text _hover={{ color: "#00DFD8", transition: "all 0.3s ease" }}>Contact Me</Text></a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
