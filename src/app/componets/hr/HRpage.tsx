"use client"
import {  Button, Card, Container, Flex, Input, List, rem, SimpleGrid, Space, Text, ThemeIcon,} from '@mantine/core'
import { IconBriefcase2Filled, IconCircle, IconCircleCheck, IconCircleDashed, IconClockHour3, IconSearch, IconUser, IconUserCheck } from '@tabler/icons-react'
import React from 'react'
import Image from 'next/image'
import work from "../../../../work.png"


const HRpage = () => {
  const demoProps = {
    m: '40px',
  };
  
  return (
    <>
    <Container  {...demoProps}>
    <Input  ml={470} mx={220} mr={220} width={"80px"} height={"42px"} top={"30px"} left={"607"} placeholder='search'  rightSection={<IconSearch/>} size='sm' radius={'lg'}></Input>
    <Space mt={40} h="md"/>
    
   <Card mr={80}   radius="md" withBorder>
   <Flex justify={'space-between'}>
   <div>
    <h1 className='text-blue-700 font-mono' >Expedite your hiring with Jobify </h1>
    <h2>Ai helps you in filter the candidate and make the first interview with them.</h2>
    <h3>then introduce you the top qualified candidates</h3>
    <Button h={30} w={190} size='md' bg={'blue'} className='font-light' >Post a new Job</Button>
    </div>
    <Image src={work} alt='interveiw' width={125}height={125}></Image>
    </Flex>
    </Card>
    
    
   
    <Card mt={40}  radius="md"  >
     <Flex justify={'space-between'}>
        <h1 className='font-bold'>Recent Job </h1>
        <h2 className='text-blue-700'>View all</h2>
     </Flex>
     
        <SimpleGrid  cols={4} >
        <Card bg={"#fafbf8"}  radius="md" withBorder>
         
          
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item><List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        2 Matches
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>

      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
        </Card>
          
        <Card bg={"#fafbf8"}  radius="md" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item><List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        2 Matches
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>

      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
        </Card>
        <Card bg={"#fafbf8"}  radius="md" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item><List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        2 Matches
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>

      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
        </Card>
        <Card bg={"#fafbf8"}  radius="md" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item><List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        2 Matches
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>

      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
        </Card>
         
        </SimpleGrid>
     
      </Card>
        
      </Container>
    </>
  )
}

export default HRpage