"use client"
import React from 'react'
import { AppShell, Burger,rem, Button, Menu, Space, Flex, Switch, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars  } from '@tabler/icons-react';
import { CiViewList } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaArchive } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";


import { IoHomeOutline } from "react-icons/io5";

function page() {
    const [opened, { toggle }] = useDisclosure();

    const theme = useMantineTheme();
 
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.gray[4]}
    />
  );
 
  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );
 return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="lg" bg={'#F7F9FA'}>
        <h1>Jobify</h1>
        <Menu>
          
<Menu.Item leftSection={<IoHomeOutline />}>HOME</Menu.Item>
<Menu.Item leftSection={<MdOutlineWork />}>Jobs</Menu.Item>
<Menu.Item leftSection={<CiViewList />}>Cv analysis</Menu.Item>
<Menu.Item leftSection={<IoIosSave />}>Templates</Menu.Item>
<Menu.Item leftSection={<FaArchive />}>Archive</Menu.Item>
<Menu.Item leftSection={<IoCall />}>Contact Us/ Demo</Menu.Item>
<Menu.Item leftSection={<CiSettings />}>settings</Menu.Item>
<Menu.Item leftSection={<CiWarning />} bg={'#FFFEFE'}>Free Trial -7days left</Menu.Item>

</Menu>
<Button>subscribe now</Button>
<Space h="xl" />
      <Flex justify={'center'} align={'center'}>
      <Switch  size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />
      </Flex>
      <Flex justify={'center'} align={'center'}>
      <Space h="xl" />
      <Menu > <GrUserSettings />My Account</Menu>
      </Flex>

      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>




    </AppShell>
  );
}

export default page