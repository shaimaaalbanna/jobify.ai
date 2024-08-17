"use client"
import { Button, Container, Flex, Input, PasswordInput, Space, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks'
import React from 'react'

const page = () => { 
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: 'email',
      password: 'password',
    },
  });

    const demoProps = {
        m: 'center',
        mt:"lg",
        bg: "#eef3ff",
      };
  return (
    <>
    <Container size={'xs'} {...demoProps}>
        <Flex justify={'center'} align={'center'}>
        <div className='mt-5 text-lg font-bold text-sky-600'>Sign In</div>
        </Flex>
    <h1 className='text-lg mt-5'>Email</h1>
    <Space h={10}/>
    <TextInput label="email" placeholder="Your name"   key={form.key('email')}
        {...form.getInputProps('email')} />
    <Space h={10}/>
    <PasswordInput
        label="password"
        defaultValue="secret"
        key={form.key('password')}
        {...form.getInputProps('password')}
       
      />
    <Space h={10}/>
    <Button>Sign In</Button>
    <Space h={10}/>
    <h2 className='text-sky-600 font-bold' >Forgot Password</h2>
    <Space h={10}/>
    </Container>
    </>
  )
}

export default page