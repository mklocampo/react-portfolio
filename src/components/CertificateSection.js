import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, Flex } from "@chakra-ui/react";
import Card from "./Card";
import SeeMore from "./SeeMore";

const myCertificates = [
    {
        title: "IBM Full-Stack JavaScript Developer",
        description: ``,
        getImageSrc: () => require("../images/IBM Full-Stack JavaScript.jpg"),
        tag: "Specialization",
        url: "https://coursera.org/share/c324d8b4454c54034060a16d92d53a4d"
    },
    {
        title: "Microsoft Certified: Azure Data Fundamentals",
        description: ``,
        getImageSrc: () => require("../images/Microsoft Certified - Azure Data Fundamentals.jpg"),
        tag: "Specialization",
        url: "https://learn.microsoft.com/api/credentials/share/es-mx/MaikolOcampoChinchilla-0608/65D6F4D432BAF968?sharingId=4E8E2CD56582CDC5"
    },
    {
        title: "Angular From Basics to Advanced Development",
        description: ``,
        getImageSrc: () => require("../images/Angular From Basics to Advanced Development.jpg"),
        tag: "Specialization",
        url: "https://coursera.org/share/563c64e180126d60c7d1a854cd63fe9f"
    },
    {
        title: "JavaScript Programming with React, Node & MongoDB",
        description: ``,
        getImageSrc: () => require("../images/JavaScript Programming with React, Node & MongoDB Specialization.jpg"),
        tag: "Specialization",
        url: "https://www.credly.com/badges/49d89cfd-2412-4611-883b-d5559675a444"
    },
    {
        title: "Java Programming for Beginners",
        description: ``,
        getImageSrc: () => require("../images/Java Programming for Beginners.jpg"),
        tag: "Certification",
        url: "https://coursera.org/share/39849668151beecdb878b51f129f86f8"
    },
    {
        title: "Introduction to Jira",
        description: ``,
        getImageSrc: () => require("../images/Introduction to Jira.jpg"),
        tag: "Certification",
        url: "https://coursera.org/share/96a39384c9ebe08d0370384142d5df56"
    },
    {
        title: "React Basics",
        description: ``,
        getImageSrc: () => require("../images/React Basics.jpg"),
        tag: "Certification",
        url: "https://coursera.org/share/19f99ef526310ea0dd5f8854df61b799"
    },
    {
        title: "Advanced React",
        description: ``,
        getImageSrc: () => require("../images/Advanced React.jpg"),
        tag: "Certification",
        url: "https://coursera.org/share/93ebb2c28418eba90fc0b99356668708"
    }
];


const CertificatesSection = () => {
    return (
        <FullScreenSection id="certificates-section"
            backgroundColor="#0f172a"
            isDarkBackground
            p={8}
            alignItems="center"
            spacing={4}
        >
            <HStack>
                <Flex alignItems="center" gap={4}>
                    <Heading as="h1" color="#00DFD8" >
                        My Certificates
                    </Heading>
                    <SeeMore seeMoreUrl={'https://www.credly.com/users/maikol-ocampo-chinchilla'} />
                </Flex>
            </HStack>
            <Box
                display="grid"
                gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" }}
                gridGap={8}
            >
                {myCertificates.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        tag={project.tag}
                        url={project.url}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default CertificatesSection;
