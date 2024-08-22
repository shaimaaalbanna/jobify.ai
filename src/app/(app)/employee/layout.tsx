"use client";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  Menu,
  rem,
  Space,
  Stack,
  Switch,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome, IconSun, IconMoonStars } from "@tabler/icons-react";
import { BsGear } from "react-icons/bs";

import { MdWork } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaInbox } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
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
     
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      
    >
    
    
      <AppShell.Navbar  bg={theme.colors.maincolor1[2]}>
        {" "}
        <h1>Jobify</h1>
        <Menu>
        <Stack gap={"lg"}>
          <Menu.Item
            leftSection={
              <IconHome style={{ width: rem(14), height: rem(14) }} />
            }
          >
            {" "}
            Home
          </Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<MdWork />}>Jobs</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<RiTeamFill />}>My Interviews</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<BsPersonVcard />}>AI Interviews</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<FaInbox />}>Inbox</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<BiPhoneCall />}>Contact Us / Demo</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' leftSection={<BsGear />}>Settings</Menu.Item>
          <Menu.Item className='hover:bg-sky-100' >Free Trial - 7 days left</Menu.Item>
          </Stack>
        </Menu>
        <Button className='hover:bg-sky-100' size="sm" bg={"blue"} radius={"md"}>
          Subscribe now
        </Button>
        <Space h="xl" />
        <Flex justify={"center"} align={"center"}>
          <Switch
            size="md"
            color="dark.4"
            onLabel={sunIcon}
            offLabel={moonIcon}
          />
        </Flex>
      </AppShell.Navbar>
      
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
   
    )
  }