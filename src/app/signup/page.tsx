import {
  Button,
  Container,
  PasswordInput,
  Space,
  TextInput,
} from "@mantine/core";
import React from "react";

const page = () => {
  const demoprops = {
    m: "center",
    mt: "lg",
    bg: "#bdc2de",
  };

  return (
    <>
      <Container {...demoprops}>
        <TextInput label=" email" placeholder=" email" />
        <Space h={5} />
        <TextInput label=" first name" placeholder=" first name" />
        <TextInput label=" last name" placeholder=" last name" />
        <PasswordInput label="password" placeholder="password" />
        <Space h={5} />

        <Button>sign up</Button>
        <Space h={5} />
      </Container>
    </>
  );
};

export default page;
