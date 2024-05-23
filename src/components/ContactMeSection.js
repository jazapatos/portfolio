import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const handleFormSubmit = async (values, { resetForm }) => { 
    console.log(response);
    try {
      // Call the submit function from useSubmit hook and wait for the response
      await submit(null, values); // Pass null for the URL (not used in hook)
      console.log(response);
      // Check the response type and show alert accordingly
      // if (response) {
      if (response.type === 'success') {
        // Reset the form
        resetForm();
        // Show success alert with the user's first name
        onOpen('success', response.message);
      } else if (response.type === 'error') {
        // Show error alert
        onOpen('error', response.message);
      }
    // } else {
    //   // Handle initial null response (e.g., show loading state)
    //   console.log('Waiting for response...');
    // }
    } catch (error) {
      // Handle any other errors (e.g., network issues, unexpected errors)
      console.error('Error submitting form:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    // type: Yup.string().required('Type of enquiry is required'), <--- Don't think validating this is needed
    comment: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema,
    onSubmit: handleFormSubmit,     
  });


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps('firstName')}
                  id="firstName"
                  name="firstName"
                />
                {formik.touched.firstName && formik.errors.firstName ? (<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>) : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                />
               {formik.touched.email && formik.errors.email ? (<FormErrorMessage>{formik.errors.email}</FormErrorMessage>) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  {...formik.getFieldProps('type')}
                  id="type" 
                  name="type">
                  <option value="hireMe" style={{ color: "black", background: "white" }}>Freelance project proposal</option>
                  <option value="openSource" style={{ color: "black", background: "white" }}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ color: "black", background: "white" }}>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps('comment')}
                  id="comment"
                  name="comment"
                  height={250}
                />
                {formik.touched.comment && formik.errors.comment ? (<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>) : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
