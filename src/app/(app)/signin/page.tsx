"use client"
import { signIn } from '@/app/api/auth/lib/auth';
import { signinSchema } from '@/app/validation/signinSchema';
import { Button, Container, Flex, Input, PasswordInput, Space, TextInput } from '@mantine/core'
import {  useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'


const page = () => { 
 
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
    const demoProps = {
        m: 'center',
        mt:"lg",
        bg: "#eef3ff",
      };
      const form = useForm({
        initialValues: {
          email: '',
          password: '',
          
        },
        validate: zodResolver(signinSchema),
      });
    
          const handleSubmit = async ({email,password}:any) => {
            try {
              setIsLoading(true);
              const response=await signIn("credentials",{email,password})

          if (response) {
            router.push("/clients/page");
          }
        } catch (error) {
          console.error("error", error);
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <>
      
    <Container size={'xs'} {...demoProps}>
    <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex justify={'center'} align={'center'}>
        <div className='mt-5 text-lg font-bold text-sky-600'>Sign In</div>
        </Flex>
    <h1 className='text-lg mt-5'>Email</h1>
    <Space h={10}/>
   
    <TextInput label="email" placeholder="Your name"   {...form.getInputProps('email')}
        />
    <Space h={10}/>
    <PasswordInput
        label="password"
        defaultValue="secret"
        {...form.getInputProps('password')}
       
      />
     
    <Space h={10}/>
    <Button type="submit" loading={isLoading}>Sign In</Button>
    <Space h={10}/>
    <h2 className='text-sky-600 font-bold' >Forgot Password</h2>
    <Space h={10}/>
    <Space/>
    </form>
    </Container>
   
    </>
  )
}

export default page