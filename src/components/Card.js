import { Heading, HStack, Image, Text, VStack, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
  return (
    <VStack
      maxW="sm"
      borderWidth="0"
      borderRadius="lg"
      overflow="hidden"
      spacing={1}
      background="white"
      align="stretch"
      height="100%"
    >
      <Image 
        src={imageSrc} 
        alt={`Image for ${title}`}
        objectFit="cover" 
        borderRadius="lg" 
        // height="75%" 
        // width="100%"
      />
      
      
      <VStack p={5} spacing={1}>
        <Heading size="md" color="black" alignSelf="flex-start">{title}</Heading>
        <Text color="gray" fontSize="sm">{description}</Text>
      </VStack>
      <Spacer />
      <HStack w="full" p={5}>
        <Text color="black">See More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
