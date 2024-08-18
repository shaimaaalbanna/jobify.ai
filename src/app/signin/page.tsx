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
      <Container size="xs" {...demoprops}>
        <TextInput label="email" placeholder="your name" />
        <Space h={4} />
        <PasswordInput label="password" />
        <Space h={5} />
        <Button variant="filled" size="md" radius="md">
          sign in
        </Button>
      </Container>
    </>
  );
};

export default page;
