import React from "react";
import { Avatar, Heading, VStack, Text, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import profileImage from '../images/profile.png';
const greeting = "Hello, I am Mike!";
const bio1 = "A fullstack developer";
const bio2 = "specialised in React and angular";
const skills = ["React", "angular", "JavaScript", "HTML", "CSS", "NodeJs", ".net", "Java"];

const LandingSection = () => (
  <FullScreenSection id="aboutme-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
     backgroundColor="#0f172a"
  > 
    <VStack spacing={6}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar src={profileImage} size="2xl" name="Mike" /> 
       <Heading as="h4" size="md" noOfLines={1}> {greeting} </Heading> 
     </VStack> 
     <VStack spacing={4}> 
       <Heading as="h1" size="2xl" > {bio1} </Heading> 
       <Heading as="h1" size="2xl" > {bio2} </Heading> 
     </VStack> 
     <Wrap justify="center" maxW="640px" spacing={4}>
        {skills.map((item) => (
          <WrapItem key={item}><Tag size="lg" colorScheme="teal" variant="subtle">{item}</Tag></WrapItem>
        ))}
      </Wrap>
   </VStack>
  </FullScreenSection>
);

export default LandingSection;
