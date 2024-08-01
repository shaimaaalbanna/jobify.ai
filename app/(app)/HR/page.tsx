"use client"
import { AppShell, Burger, Button, Flex, Menu, rem ,Space,Switch, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome,IconSun, IconMoonStars  } from '@tabler/icons-react';
import { BsFloppy , BsGear} from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";

 export default function page() {
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
        <div>HR</div>
      </AppShell.Header >

      <AppShell.Navbar p="md" bg={'#e9f2f9'}> <h1>Jobify</h1>
      
      <Menu>
        <Menu.Item leftSection={<IconHome style={{ width: rem(14), height: rem(14) }} />}> Home</Menu.Item>
        <Menu.Item leftSection={<MdWork />}>Jobs</Menu.Item>
        <Menu.Item leftSection={<FaAddressBook />}>Cv analysis</Menu.Item>
        <Menu.Item leftSection={<BsFloppy />}>Templates</Menu.Item>
        <Menu.Item leftSection={<FaArchive />}>Archive</Menu.Item>
        <Menu.Item leftSection={<BiPhoneCall />}>Contact Us / Demo</Menu.Item>
        <Menu.Item leftSection={<BsGear />}>Settings</Menu.Item>
        <Menu.Item bg={"#fafbf8"}>Free Trial - 7 days left</Menu.Item>
       
      </Menu>
      <Button size='sm' bg={'blue'} radius={'md'} >Subscribe now</Button>
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