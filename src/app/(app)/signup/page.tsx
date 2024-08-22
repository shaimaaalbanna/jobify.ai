"use client";
import {
  Button,
  Container,
  Input,
  PasswordInput,
  Space,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { z } from "zod";
import React from "react";
import { signinValidation } from "@/app/validation/signinValidation";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const mutation = useMutation((userData: any) => {
  return axios.post("http://localhost:3000/api/signup", userData);
});
const handleSubmit = ({ email, password }: any) => {
  mutation.mutate(
    { email, password },
    {
      onSuccess: (data) => {
        console.log("Form submitted successfully:", data);
      },
      onError: (error) => {
        console.error("Error submitting form:", error);
      },
    }
  );
};

const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  age: z.number().min(18, {
    message: "You must be at least 18 to create an account",
  }),
});

const form = useForm({
  mode: "uncontrolled",
  initialValues: {
    email: "",
    password: "",
  },
  validate: zodResolver(signinValidation),
});

form.validate();
form.errors;

const page = () => {
  const demoprops = {
    m: "center",
    mt: "lg",
    bg: "#bdc2de",
  };

  return (
    <>
      <Container {...demoprops}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label=" email"
            placeholder=" email"
            {...form.getInputProps("email")}
          />
          <Space h={5} />
          <TextInput label=" first name" placeholder=" first name" />
          <TextInput label=" last name" placeholder=" last name" />
          <PasswordInput
            label="password"
            placeholder="password"
            defaultValue="*******"
            {...form.getInputProps("password")}
          />
          <Space h={5} />

          <Button>sign up</Button>
          <Space h={5} />
        </form>
      </Container>
    </>
  );
};

export default page;
