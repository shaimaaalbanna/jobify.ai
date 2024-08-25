"use client";
import {
  Button,
  Container,
  Space,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { z } from "zod";
import React from "react";
import axios from "axios";
import { signinValidation } from "@/app/validation/signinValidation";

const Page = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
    },
    validate: zodResolver(signinValidation),
  });

  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name: values.name,
        email: values.email,

        password: values.password,
      });
      // Handle response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error as needed
      console.error("Sign-up error:", error);
    }
  };

  const demoprops = {
    m: "center",
    mt: "lg",
    bg: "#bdc2de",
  };

  return (
    <Container {...demoprops}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="First and last name"
          {...form.getInputProps("name")}
        />
        <Space h={5} />
        <TextInput
          label="Email"
          placeholder="Your email"
          {...form.getInputProps("email")}
        />

        <Space h={5} />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          {...form.getInputProps("password")}
        />
        <Space h={5} />
        <Button type="submit">Sign Up</Button>
        <Space h={5} />
      </form>
    </Container>
  );
};

export default Page;
