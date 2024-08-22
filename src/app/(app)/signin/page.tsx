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
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { signinValidation } from "@/app/validation/signinValidation";
import { z } from "zod";

const page = () => {
  const demoprops = {
    m: "center",
    mt: "lg",
    bg: "#bdc2de",
  };
  const mutation = useMutation((userData: any) => {
    return axios.post("http://localhost:3000/api/signin", userData);
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

  const Form = useForm({
    mode: "uncontrolled",
    initialvalues: {
      email: "",
      password: "",
    },
    validate: zodResolver(signinValidation),
  });
  form.validate();
  form.errors;
  return (
    <>
      <Container size="xs" {...demoprops}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="email"
            placeholder="your name"
            {...form.getInputProps("email")}
          />
          <Space h={4} />
          <PasswordInput label="password" {...form.getInputProps("password")} />
          <Space h={5} />
          <Button variant="filled" size="md" radius="md">
            sign in
          </Button>
        </form>
      </Container>
    </>
  );
};

export default page;
