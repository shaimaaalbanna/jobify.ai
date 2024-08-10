import React from "react";
import { Input, Progress, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import EmployeePage from "@/components/employee/page";

const Page = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Input
          placeholder="Search"
          rightSection={<IconSearch size={16} />}
          style={{
            width: "80%",
            maxWidth: "400px",
            height: "42px",
            margin: "0 auto",
          }}
        />
      </div>

      <Space mt={20} h="md" />

      <div
        style={{
          textAlign: "center",
          width: "80%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Welcome, John Doe!
        </h1>

        <Space mt={20} h="md" />

        <Progress
          value={70}
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        />
      </div>

      <EmployeePage />
    </>
  );
};

export default Page;
