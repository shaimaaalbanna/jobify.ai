"use client";
import { Button, Container, Flex, Space, TextInput, PasswordInput } from '@mantine/core';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm, zodResolver } from '@mantine/form';
import { signinschema } from '@/app/validation/signinSchema';

const Page = () => {

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(signinschema),
  });

  const handleSubmit = async ({ email, password }: any) => {
    try {
      const response = await axios.post('http://localhost:3000/api/signinRoute', { email, password });
      
    } catch (error) {
      
    }
  };

  const demoProps = {
    m: 'center',
    mt: "lg",
    bg: "#eef3ff",
  };

  return (
    <Container {...demoProps}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex justify={'center'} align={'center'}>
          <div className='mt-5 text-lg font-bold text-sky-600'>Sign In</div>
        </Flex>
        <Space h={10} />
        <TextInput 
          label="Email" 
          placeholder="Your email" 
          {...form.getInputProps('email')} 
        />
        <Space h={10} />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
        />
        <Space h={10} />
        <Button type="submit">Sign In</Button>
        <Space h={10} />
        <h2 className='text-sky-600 font-bold'>Forgot Password</h2>
        <Space h={10} />
      </form>
    </Container>
  );
};

export default Page;
