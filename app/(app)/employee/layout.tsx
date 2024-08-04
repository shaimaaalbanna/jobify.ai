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
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Employee</div>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg={"#e9f2f9"}>
        {" "}
        <h1>Jobify</h1>
        <Menu>
          <Menu.Item
            leftSection={
              <IconHome style={{ width: rem(14), height: rem(14) }} />
            }
          >
            {" "}
            Home
          </Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Jobs</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Cv analysis</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Templates</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Archive</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Contact Us / Demo</Menu.Item>
          <Menu.Item leftSection={<IconHome />}>Settings</Menu.Item>
          <Menu.Item bg={"#fafbf8"}>Free Trial - 7 days left</Menu.Item>
        </Menu>
        <Button size="sm" bg={"blue"} radius={"md"}>
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
        <Flex justify={"center"} align={"center"}>
          <Space h="xl" />
          <Menu>
            {" "}
            <IconMoonStars />
            My Account
          </Menu>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
