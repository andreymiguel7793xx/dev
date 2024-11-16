// src/App.js

import React from 'react';
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  people: Yup.number().min(1, 'At least 1 person required').required('Number of people is required'),
});

const App = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            date: '',
            time: '',
            people: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Field as={Input} name="name" />
                  <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Field as={Input} type="email" name="email" />
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </FormControl>

                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Field as={Input} type="date" name="date" />
                  <ErrorMessage name="date" component="div" style={{ color: 'red' }} />
                </FormControl>

                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Field as={Select} name="time">
                    <option value="">Select a time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </Field>
                  <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
                </FormControl>

                <FormControl>
                  <FormLabel>Number of People</FormLabel>
                  <Field as={Input} type="number" name="people" />
                  <ErrorMessage name="people" component="div" style={{ color: 'red' }} />
                </FormControl>

                <Button type="submit" colorScheme="teal">
                  Book Table
                </Button>
            
