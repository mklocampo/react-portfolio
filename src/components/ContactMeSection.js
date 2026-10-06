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
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: ''
    },
    onSubmit: (values) => { 
     submit('https://john.com/contactme', values); 
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().min(25, "Must be at least 25 characters").required('Required'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection id="contactme-section"
      isDarkBackground
      backgroundColor="#0f172a"
      alignItems="center"
      spacing={4}
    >
      <VStack pb={12} >
        <Heading as="h1" color="#00DFD8">
          Contact me
        </Heading>
        <Box p={4} rounded="lg" backgroundColor="#1e293b" border="1px solid #334155">
          <form onSubmit={formik.handleSubmit} alignItems="center">
            <VStack>
              <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  focusBorderColor="#00DFD8"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"  
                  focusBorderColor="#00DFD8"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type" 
                  focusBorderColor="#00DFD8"
                  color="white"
                  backgroundColor="#0f172a"
                  {...formik.getFieldProps('type')} 
                >
                  <option value="hireMe" style={{ background: "#0f172a" }} >Freelance project proposal</option>
                  <option value="openSource" style={{ background: "#0f172a" }} >Open source consultancy session</option>
                  <option value="other" style={{ background: "#0f172a" }} >Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={100}
                  focusBorderColor="#00DFD8"
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full" isLoading={isLoading}>
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
