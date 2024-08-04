"use client";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  Menu,
  rem,
  Space,
  Switch,
  useMantineTheme,
  Box,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome, IconSun, IconMoonStars } from "@tabler/icons-react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
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
      header={{ height: 30 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Hr</div>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg={"#e9f2f9"}>
        {" "}
        <h1
          style={{
            fontSize: rem(32), // Adjust the size as needed
            fontWeight: 700,
            margin: 0,
            textAlign: "center",
            color: theme.colors.dark[7], // Adjust color if needed
          }}
        >
          Jobify
        </h1>
        {/* <Flex
          direction="column"
          align="center"
          style={{ marginBottom: rem(20) }}
        >
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "black", to: "red", deg: 90 }}
          >
            Jobify
          </Text>
        </Flex> */}
        <Menu>
          <Menu.Item leftSection={<IconHome />}> Home</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Jobs</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>My Interviews</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>All Interviews</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Inbox</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Contact Us / Demo</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Settings</Menu.Item>
        </Menu>
        <Button variant="transparent">Free Trial - 7 days left</Button>
        <Flex
          justify={"center"}
          direction="column"
          align="center"
          style={{ marginBottom: rem(120) }}
        >
          <Button variant="filled" size="sm" radius={"md"}>
            Subscribe now
          </Button>
        </Flex>
        <Space h="lg" />
        <Flex justify={"center"} align={"center"}>
          <Switch
            size="md"
            color="blue"
            onLabel={
              <IconSun
                style={{ color: "blue", width: rem(16), height: rem(16) }}
              />
            }
            offLabel={
              <IconMoonStars
                style={{ color: "blue", width: rem(16), height: rem(16) }}
              />
            }
            styles={(theme) => ({
              track: {
                backgroundColor: "transparent",
                border: `1px solid ${theme.colors.blue[4]}`, // Optional: border color
              },
              thumb: {
                backgroundColor: "transparent",
                border: `1px solid ${theme.colors.blue[6]}`, // Optional: thumb border color
              },
              icon: {
                color: theme.colors.blue[6], // Optional: icon color
              },
            })}
          />
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
