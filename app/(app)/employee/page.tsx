import React from "react";

import { Input, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import EmployeePage from "@/components/employee/page";

const Page = () => {
  return (
    <>
      <Input
        placeholder="Search"
        rightSection={<IconSearch size={16} />}
        ml={470}
        mx={220}
        mr={220}
        width={"80px"}
        height={"42px"}
        top={"30px"}
        left={"607"}
      ></Input>
      <Space mt={10} h="md" />
      <EmployeePage />
    </>
  );
};

export default Page;
