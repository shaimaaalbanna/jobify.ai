"use client"
import { signinschema } from '@/app/validation/signinSchema';
import { Button, Container, Flex, Input, PasswordInput, Space, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
 
const Page = () => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '', 
      confirmPassword: "",
    },
    validate: zodResolver(signinschema),
  });

  const handleSubmit = async ({email, password}: any) => {
    try {
      const response = await axios.post('http://localhost:3000/api/signinRoute', {email, password});
      
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
          <div className='mt-5 text-lg font-bold text-sky-600'>Sign up</div>
        </Flex>
        <Space h={10}/>
        <TextInput 
          label="First Name" 
          placeholder="Your name"
          {...form.getInputProps('name')} 
        />
        <Space h={10}/>
        <TextInput 
          label="Last Name" 
          placeholder="Last name" 
        />
        <Space h={10}/>
        <TextInput 
          label="Email" 
          placeholder="Use a valid email"
          {...form.getInputProps('email')}
        />
        <Space h={10}/>
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
        />
        <Space h={10}/>
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm your password"
          {...form.getInputProps('confirmPassword')}
        />
        <Space h={20}/>
        <Button type="submit">Sign up</Button>
        <Space h={10}/>
      </form>
    </Container>
  )
}

export default Page;
