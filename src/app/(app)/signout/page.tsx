"use client"
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'

const Page = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: 'email',
          termsOfService: false,
        },
    
        validate: {
          email: () => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
  return (
    <form onSubmit={form.onSubmit((email) => console.log())}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  )
}

export default Page