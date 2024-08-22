"use client"
import { signinschema } from '@/app/validation/signinSchema';
import { Button, Container, Flex, Input, PasswordInput, Space, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
 
const page = () => {
 
  const mutation = useMutation((userData: any) => {
    return axios.post('http://localhost:3000/api/signinRoute', userData);
  });
  const handleSubmit = ({email,password}:any) => {
    mutation.mutate(({email,password}), {
      onSuccess: (data) => {
        console.log('Form submitted successfully:', data);
      },
      onError: (error) => {
        console.error('Error submitting form:', error);
      },
    });
  };
    const demoProps = {
        m: 'center',
        mt:"lg",
        bg: "#eef3ff",
      };
      const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: '',
          email: '',
          confirmPassword: "",
        },
        validate: zodResolver(signinschema),
      });
      
      form.validate();
      form.errors;
  return (
    <>
    <Container {...demoProps}>
    <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex justify={'center'} align={'center'}>
        <div className='mt-5 text-lg font-bold text-sky-600'>Sign up</div>
        </Flex>
    {/* <h1 className='text-lg mt-5'>First Name</h1> */}
    <Space h={10}/>
   <TextInput label="First Name" placeholder="Your name"  key={form.key('name')}
        {...form.getInputProps('name')} />
   <Space h={10}/>
   <TextInput label="Last Name" placeholder="last name" />
    <Space h={10}/>
    <TextInput label="Email" placeholder="use a valid email"   
        {...form.getInputProps('email')}/>
    <Space h={10}/>
    <PasswordInput
        label="password"
        defaultValue="secret"
        
        {...form.getInputProps('password')}
       
      />
    <Space h={10}/>
    <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        {...form.getInputProps('confirmPassword')}
      />
      <Space h={20}/>

    <Button>Sign up</Button>
    <Space h={10}/>
    
    </form>
    </Container>
    </>
  )
}
 
export default page