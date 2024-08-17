"use client"
import { Button, Container, Input, PasswordInput, Space, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import React from 'react'

const page = () => {
    const demoProps = {
        m: 'center',
        mt:"lg",
        bg: "#9bc2ff",
      }
      const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: 'email',
          password: 'password',
        },
      });
    
  return (
    <>
    
       
            <Container size="xs" {...demoProps}>
                    
    <TextInput label="email" placeholder="Your name"   key={form.key('email')}
        {...form.getInputProps('email')} />
    <Space h={5} />
    <PasswordInput
        label="password"
        defaultValue="*******"
        key={form.key('password')}
        {...form.getInputProps('password')}
       
  />
   <Space h={5} />
  <PasswordInput
        label="confirm password"
        defaultValue="******" 
        placeholder='*******'     
  />
  <Space h={5} />
  <Button radius={'lg'}size='md'>Sign up</Button>
  <Space h={5} />
  </Container>
  
    
    </>
  )
}

export default page