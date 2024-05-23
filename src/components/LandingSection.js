import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Atticus!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={2}>
      <Avatar
        size="2xl"
        name="Atticus"
        src="https://i.pravatar.cc/150?img=17" // Replace with the path to your image
      />
      </VStack>
      <VStack spacing={4}>
      <Heading color="white" size="xs">{greeting}</Heading>
      <Heading color="white" size="xl">{bio1}</Heading>
      <Heading color="white" size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
