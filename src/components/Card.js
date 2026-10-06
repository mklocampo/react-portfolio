import { Heading, HStack, Image, Text, VStack, Tag } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SeeMore from "./SeeMore";

const Card = ({ title, description, imageSrc, tag, url }) => {

  return (
    <>
      <VStack
        backgroundColor="#1e293b"
        borderRadius="xl"
        overflow="hidden"
        borderRadius="xl"
        transition="transform .2s"
        _hover={{ transform: "scale(1.02)" }}
        align="stretch"
        h="100%" 
      >
        <Image src={imageSrc} alt={title} height="250px" />
        <VStack spacing={4} pl={4} pt={2} pr={4} alignItems="flex-start" flexGrow={1} >
          <Heading as="h3" size="md" color="#00DFD8">{title}</Heading>
          <Text color="#94a3b8" fontSize="sm">{description}</Text>
        </VStack> 
        <VStack mt="auto" pl={4} pb={4} alignItems="flex-start">
          <SeeMore seeMoreUrl={url} />
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
