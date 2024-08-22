import { Button, Container, Flex, Input, PasswordInput, Space, TextInput } from '@mantine/core'
import React from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm, zodResolver } from '@mantine/form';
import { signinschema } from '@/app/validation/signinSchema';

const page = () => {
 
 
    const demoProps = {
        m: 'center',
        mt:"lg",
        bg: "#eef3ff",
      };
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
      const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: '',
          email: '',
          
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
        <div className='mt-5 text-lg font-bold text-sky-600'>Sign In</div>
        </Flex>

    <Space h={10}/>
    <TextInput label="email" placeholder="Your name"  {...form.getInputProps('name')} />
    <Space h={10}/>
    <PasswordInput
        label="password"
        defaultValue="secret"
        {...form.getInputProps('password')}
      />
    <Space h={10}/>
    <Button>Sign In</Button>
    <Space h={10}/>
    <h2 className='text-sky-600 font-bold' >Forgot Password</h2>
    <Space h={10}/>
    </form>
    </Container>
    </>
  )
}
 
export default page