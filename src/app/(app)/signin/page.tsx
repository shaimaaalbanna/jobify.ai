"use client";
import axios from "axios";
import {
  Button,
  Container,
  Flex,
  Input,
  PasswordInput,
  Space,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { z } from "zod";
import React from "react";
import { signinValidation } from "@/app/validation/signinValidation";

// Ensure you have a valid zod schema for signinValidation

const Page = () => {
  const demoprops = {
    m: "center",
    mt: "lg",
    bg: "#bdc2de",
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(signinValidation),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/signin", {
        email: values.email,
        password: values.password,
      });
      // Handle response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error as needed
      console.error("Sign-in error:", error);
    }
  };

  return (
    <Container size="xs" {...demoprops}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="your email"
          {...form.getInputProps("email")}
        />
        <Space h={4} />
        <PasswordInput
          label="Password"
          placeholder="your password"
          {...form.getInputProps("password")}
        />
        <Space h={5} />
        <Button type="submit" variant="filled" size="md" radius="md">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default Page;
