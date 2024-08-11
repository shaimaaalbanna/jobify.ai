"use client"
import { Button, Card, Container, Flex, Input, List, rem, SimpleGrid, Space, ThemeIcon } from '@mantine/core'
import { IconBriefcase2Filled, IconCalendarStats, IconCircle, IconClock2, IconClockHour3, IconDeviceLaptop, IconSearch, IconSquareArrowRight, IconUser, IconUserCheck, IconUsers } from '@tabler/icons-react';
import React from 'react'
 
const Employee = () => {
    const demoProps = {
        m: '20px',
      };
     
  return (
    <>
    <Container  {...demoProps}>
    <Input  ml={470} mx={220} mr={220} width={"80px"} height={"42px"} top={"30px"} left={"607"} placeholder='search'  rightSection={<IconSearch/>} size='sm' radius={'lg'}></Input>
    <Space mt={10} h="md"/>
     <Card   radius="md"  >
     <Flex justify={'space-between'}>
     <h1 className='font-bold'>Upcoming Interviews</h1>
        <h2 className='text-blue-700'>View all</h2>
     </Flex>
   
        <SimpleGrid  cols={3} >
        <Card bg={"#fafbf8"}  radius="lg" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item fw={'bold'}
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconDeviceLaptop style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUsers style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Dicotra Tech Ltd.
      </List.Item>
     
       
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCalendarStats style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deaadline: 25-07-24
      </List.Item>
      <Flex justify={'space-between'}>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconClock2 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Duration: 45
      </List.Item>
     
      <List.Item>
        <Button radius={'md'} size='xs'>Start Now</Button>
      </List.Item>
      </Flex>
    </List>
       
        </Card>
       
        <Card bg={"#fafbf8"}  radius="lg" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item fw={'bold'}
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
        Dicotra Tech Ltd.
      </List.Item>
     
       
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deaadline: 25-07-24
      </List.Item>
      <Flex justify={'space-between'}>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Duration: 45
      </List.Item>
     
      <List.Item>
        <Button radius={'md'} size='xs'>Start Now</Button>
      </List.Item>
      </Flex>
    </List>
        </Card>
        <Card bg={"#fafbf8"}  radius="lg" withBorder>
        <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item fw={'bold'}
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
        Dicotra Tech Ltd.
      </List.Item>
     
       
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUserCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deaadline: 25-07-24
      </List.Item>
      <Flex justify={'space-between'}>
      <List.Item
        icon={
          <ThemeIcon color="green" size={24} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Duration: 45
      </List.Item>
     
      <List.Item>
        <Button radius={'md'} size='xs'>Start Now</Button>
      </List.Item>
      </Flex>
    </List>
        </Card>
       
        </SimpleGrid>
     
     </Card>
     <Card   radius="md"  >
    <Flex justify={'space-between'}>
    <h1 className='font-bold'>Recommended  Jobs</h1>
        <h2 className='text-blue-700'>View all</h2>
     </Flex>
 
       <SimpleGrid  cols={4} >
       <Card bg={"#fafbf8"}  radius="lg" withBorder>
       <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={20} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>
 
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
       </Card>
       
       <Card bg={"#fafbf8"}  radius="lg" withBorder>
       <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={20} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>
 
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
       </Card>
       <Card bg={"#fafbf8"}  radius="lg" withBorder>
       <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={20} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>
 
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconClockHour3 style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Deadline
      </List.Item>
    </List>
       </Card>
       <Card bg={"#fafbf8"}  radius="lg" withBorder>
       <List
      spacing="xs"
      size="sm"
      center
    >
     <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconBriefcase2Filled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        BIM Manager
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
            <IconUser style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        15 applications
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="green" size={20} radius="xl">
            <IconCircle style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Active
      </List.Item>
 
      <List.Item
        icon={
          <ThemeIcon color="blue" size={20} radius="xl">
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
    <Card   radius="md"  >
     <Flex justify={'space-between'}>
        <h1 className='font-bold'>AI Interviews </h1>
        <h2 className='text-blue-700'>View all</h2>
     </Flex>
        <SimpleGrid  cols={3} >
        <Card bg={"#fafbf8"}  radius="md" withBorder>
            <Flex justify={'space-between'}>
    <div className='text-sm'>
    <h1>Session Name:</h1>
    <h2>Session Test</h2>
    <Space h={10}/>
    <h3>Job title:BIM Manager</h3>
    <Space h={10}/>
    <h4>Location: Location:Saudi Arabia</h4>
    <Space h={10}/>
    <Button rightSection={<IconSquareArrowRight/> } size='xs' radius={'lg'} > View Report</Button>
    </div>
    <div className='text-xs'>
         <h5>Company:</h5>
        <div>Diriyah Gate</div>
        <Space h={10}/>
        <div>Date:12-04-24</div>
         <Space h={10}/>
        <div className=' text-blue-700 '> Score:25</div>
        </div>
        </Flex>
        </Card>
         
       
        <Card bg={"#fafbf8"}  radius="md" withBorder>
        <Flex justify={'space-between'}>
    <div className='text-sm'>
    <h1>Session Name:</h1>
    <h2>Session Test</h2>
    <Space h={10}/>
    <h3>Job title:BIM Manager</h3>
    <Space h={10}/>
    <h4>Location: Location:Saudi Arabia</h4>
    <Space h={10}/>
    <Button rightSection={<IconSquareArrowRight/> } size='xs' radius={'lg'} > View Report</Button>
    </div>
    <div className='text-xs'>
         <h5>Company:</h5>
        <div>Diriyah Gate</div>
        <Space h={10}/>
        <div>Date:12-04-24</div>
         <Space h={10}/>
        <div className=' text-blue-700 '> Score:25</div>
        </div>
        </Flex>
        </Card>
        <Card bg={"#fafbf8"}  radius="md" withBorder>
        <Flex justify={'space-between'}>
    <div className='text-sm'>
    <h1>Session Name:</h1>
    <h2>Session Test</h2>
    <Space h={10}/>
    <h3>Job title:BIM Manager</h3>
    <Space h={10}/>
    <h4>Location: Location:Saudi Arabia</h4>
    <Space h={10}/>
    <Button rightSection={<IconSquareArrowRight/> } size='xs' radius={'lg'} > View Report</Button>
    </div>
    <div className='text-xs'>
         <h5>Company:</h5>
        <div>Diriyah Gate</div>
        <Space h={10}/>
        <div>Date:12-04-24</div>
         <Space h={10}/>
        <div className=' text-blue-700 '> Score:25</div>
        </div>
        </Flex>
        </Card>
         
        </SimpleGrid>
     
      </Card>
     </Container>
        </>
  )
}
 
export default Employee